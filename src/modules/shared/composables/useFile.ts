import { ref } from 'vue';
import { exportFile } from 'quasar';

import { api } from 'src/boot/axios';
import useNotify from './useNotify';

const useFile = () => {
  const file = ref<File | null>(null);
  const image = ref<string | null>(null);
  const notify = useNotify();

  const uploadFile = async (resource: string) => {
    if (!file.value) return null;

    try {
      const formData = new FormData();

      formData.append('file', file.value);

      const { data } = await api.post<{ secureUrl: string }>(
        'files/' + resource,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      return data.secureUrl;
    } catch (error: any) {
      return null;
    }
  };

  const changeFile = () => {
    if (!file.value) return;
    image.value = URL.createObjectURL(file.value);
  };

  const downloadFile = async (
    urlParam: string,
    fileName: string,
    filters: any = {}
  ) => {
    try {
      const response = await api.get(urlParam, {
        params: { ...filters },
        responseType: 'blob',
      });
      const status = exportFile(fileName, response.data);

      if (!status) {
        notify.errorNotify('Permission denied');
      }
    } catch (error: any) {
      notify.errorNotify(error.message || 'Error downloading file');
    }
  };

  return {
    file,
    image,
    uploadFile,
    changeFile,
    downloadFile,
  };
};

export default useFile;
