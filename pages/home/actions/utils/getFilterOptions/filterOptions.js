function getUniqueSourcesDestinationsStatusesAndDateRange(dataIntegrations) {
  const sources = new Set();
  const destinations = new Set();
  const statuses = new Set();
  const dates = [];

  dataIntegrations.forEach(integration => {
    if (integration.source) {
      sources.add(integration.source);
    }
    if (integration.destination) {
      destinations.add(integration.destination);
    }
    if (integration.status) {
      statuses.add(integration.status);
    }
    if (integration.lastUpdated) {
      dates.push(new Date(integration.lastUpdated));
    }
  });

  const startDate = new Date(Math.min(...dates)).toISOString().split('T')[0];

  return {
    sources: Array.from(sources),
    destinations: Array.from(destinations),
    statuses: Array.from(statuses),
    startDate,
    endDate: Date.now(),
  };
}

return getUniqueSourcesDestinationsStatusesAndDateRange({{state.integrations}});
