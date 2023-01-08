import { Notify, Dialog } from 'quasar';

const useDialog = () => {
  const confimDialog = (message: string): Promise<boolean> => {
    return new Promise((resolve) => {
      Dialog.create({
        message,
        title: 'Confirm',
        cancel: true,
        persistent: true,
        ok: { color: 'negative', push: false },
      })
        .onOk(() => {
          resolve(true);
        })
        .onCancel(() => {
          resolve(false);
        })
        .onDismiss(() => {
          resolve(false);
        });
    });
  };

  return {
    confimDialog,
  };
};

export default useDialog;
