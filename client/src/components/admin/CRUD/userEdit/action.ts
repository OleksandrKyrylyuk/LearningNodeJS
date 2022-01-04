import { Dispatch } from "react";
import http from "../../../../http";
import axios, { AxiosError } from "axios";
import {  IEditResponse, IEditUser } from './types';

export const EditUser = (data: IEditUser): any => {
  return async () => {
    try {
      const response = await http.put<IEditResponse>("/api/users/edit", data);
      return Promise.resolve<IEditResponse>(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<IEditResponse>;
        if (serverError && serverError.response) {
          const { message } = serverError.response.data;
          return Promise.reject(message);
        }
      }
    }
  };
};
