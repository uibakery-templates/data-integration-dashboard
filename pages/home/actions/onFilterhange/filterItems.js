return {{state.integrations}}.filter((integration) => {
  const sources = {{data}}.sources || [];
  const destinations = {{data}}.destinations || [];
  const startDate = {{data}}.startDate;
  const endDate = {{data}}.endDate;

  return (
    (sources.length === 0 || sources.includes(integration.source)) &&
    (destinations.length === 0 || destinations.includes(integration.destination)) &&
    (!startDate || new Date(integration.lastUpdated) >= new Date(startDate)) &&
    (!endDate || new Date(integration.lastUpdated) <= new Date(endDate))
  );
});