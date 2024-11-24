import React, { useState, useEffect } from 'react';
import Header from './Header';
import InfoCard from './InfoCard';
import ServiceDetails from './ServiceDetails';
import ProfessionalAvailability from './ProfessionalAvailability';
import TotalServicesChart from './TotalServicesChart';
import Filter from './Filter';
import PaymentCollected from './PaymentCollected';

const Dashboard = () => {
  const [servicesData, setServicesData] = useState(null);
  const [filteredServicesData, setFilteredServicesData] = useState(null);
  const [professionalCountData, setProfessionalCountData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Data on Component Load
  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const response = await fetch(
          'http://122.176.232.35:8008/web/Details_of_ServicesOngoingPendingCompleted/'
        );
        if (!response.ok) throw new Error('Failed to fetch services data');
        const data = await response.json();
        setServicesData(data.servicesData || {});
        setFilteredServicesData(data.servicesData || {});
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchProfessionalCountData = async () => {
      try {
        const response = await fetch('http://122.176.232.35:8008/web/professional-count/');
        if (!response.ok) throw new Error('Failed to fetch professional count data');
        const data = await response.json();
        setProfessionalCountData(data || {});
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchServicesData();
    fetchProfessionalCountData();
  }, []);

  // Handle Filter Changes
  const handleFilterChange = (filter) => {
    if (filter === 'Today') {
      const today = new Date().toISOString().split('T')[0];
      const filtered = servicesData?.services?.filter((service) => service.date === today);
      setFilteredServicesData({ ...servicesData, services: filtered });
    } else if (filter === 'This Month') {
      const currentMonth = new Date().getMonth();
      const filtered = servicesData?.services?.filter(
        (service) => new Date(service.date).getMonth() === currentMonth
      );
      setFilteredServicesData({ ...servicesData, services: filtered });
    } else if (filter === 'Last Month') {
      const lastMonth = new Date().getMonth() - 1;
      const filtered = servicesData?.services?.filter(
        (service) => new Date(service.date).getMonth() === lastMonth
      );
      setFilteredServicesData({ ...servicesData, services: filtered });
    } else {
      setFilteredServicesData(servicesData); // Default to all data
    }
  };

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error) return <div className="text-center mt-4 text-red-500">Error: {error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Filter onFilterChange={handleFilterChange} />

      {/* Info Cards */}
      <div className="flex justify-between mx-2 gap-4">
        <div className="w-2/3 flex justify-between mb-8 bg-white border rounded-md p-4">
          <InfoCard title="Total Enquiry" value={filteredServicesData?.totalEnquiry || 5} bgColor="bg-purple-600" />
          <InfoCard title="Converted" value={filteredServicesData?.converted || 2} bgColor="bg-red-600" />
          <InfoCard title="In Follow Up" value={filteredServicesData?.inFollowUp || 2} bgColor="bg-teal-500" />
          <InfoCard title="Cancelled" value={filteredServicesData?.cancelled || 0} bgColor="bg-green-600" />
          <InfoCard title="Pending" value={filteredServicesData?.pending || 1} bgColor="bg-blue-600" />
        </div>
        <PaymentCollected />
      </div>

      {/* Main Content */}
      <div className="flex mx-2 gap-4 justify-between">
        <div className="w-1/3">
          <ServiceDetails services={filteredServicesData?.services || []} />
        </div>
        <div className="mb-5 w-1/3">
          <TotalServicesChart
            completed={filteredServicesData?.completed || 0}
            ongoing={filteredServicesData?.ongoing || 0}
            pending={filteredServicesData?.pending || 0}
          />
        </div>
        <div className="mt-3 w-1/3">
          <ProfessionalAvailability
            assigned={professionalCountData?.assigned || 0}
            unassigned={professionalCountData?.unassigned || 0}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

