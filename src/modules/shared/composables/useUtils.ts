interface ParamsTitleReport {
  resource: string;
  isOnlineStation: boolean | null;
  cluster: string | null;
}

const useUtils = () => {
  const generateTitleReport = (params: ParamsTitleReport) => {
    const { resource, isOnlineStation, cluster } = params;
    let title = `Report of ${resource}`;

    if (typeof isOnlineStation === 'boolean') {
      const isOnline = isOnlineStation ? 'Online' : 'Offline';
      title = `${title} ${isOnline}`;
    }

    if (cluster) {
      title = `${title} - ${cluster}`;
    }

    return title;
  };

  return {
    generateTitleReport,
  };
};

export default useUtils;
