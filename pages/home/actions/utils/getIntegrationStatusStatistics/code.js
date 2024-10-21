return {{state.filteredIntegrations}}.reduce(
  (acc, integration) => {
    if (integration.status === 'Success') {
      acc.success++;
    } else if (integration.status === 'Failed') {
      acc.failed++;
    } else if (integration.status === 'In Progress') {
      acc.inProgress++;
    }
    return acc;
  },
  { success: 0, failed: 0, inProgress: 0 }
);