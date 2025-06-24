import React from 'react';
import { useSelector } from 'react-redux';
import { VersionOverview } from '@plone/volto/components';

const VersionInfo = ({ mockData }) => {
  const reduxData = useSelector((state) => state.controlpanels?.systeminformation || {});

  const data = mockData || reduxData;

  return <VersionOverview {...data} />;
};

export default VersionInfo;
