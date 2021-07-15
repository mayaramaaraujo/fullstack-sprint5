import { useState } from "react";

const useLoading = () => {
  const [liveRequests, setLiveRequests] = useState(0);

  // Console.log(`addRequest ${liveRequests}`);
  const addRequest = () => setLiveRequests((liveReq) => liveReq + 1);

  // Console.log(`removeRequest ${liveRequests}`);
  const removeRequest = () => setLiveRequests((liveReq) => liveReq - 1);

  // Console.log(`isLoading ${liveRequests}`);
  const isLoading = () => liveRequests > 0;

  return [addRequest, removeRequest, isLoading];
};

export default useLoading;
