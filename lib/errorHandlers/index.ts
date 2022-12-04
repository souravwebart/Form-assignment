import { AxiosError } from 'axios';

export const HandleError = (error: AxiosError) =>{
  return (error && error.isAxiosError ? error.response?.data : error.message);
}
