function calculateProcessingTimeHistogram(dataIntegrations, binSize = 500) {
  const processingTimes = dataIntegrations.map((integration) => {
    return integration.duration === 'N/A' ? 0 : parseInt(integration.duration.replace(' ms', ''), 10);
  });

  const histogram = {};
  processingTimes.forEach((time) => {
    const bin = Math.floor(time / binSize) * binSize;
    histogram[bin] = (histogram[bin] || 0) + 1;
  });

  return Object.entries(histogram).map(([key, value]) => ({
    x: `${key} - ${parseInt(key) + binSize}`,
    y: value,
  }));
}

return calculateProcessingTimeHistogram({{state.filteredIntegrations}}, 100);