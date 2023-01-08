import { Notify } from 'quasar'

const useNotify = () => {

  const successNotify = (message: string) => {
    Notify.create({
      message,
      color: 'positive',
      textColor: 'white',
      position: 'bottom',
    })
  }

  const errorNotify = (message: string) => {
    Notify.create({
      message,
      color: 'negative',
      textColor: 'white',
      position: 'bottom',
    })
  }

  return {
    successNotify,
    errorNotify
  }
}

export default useNotify;
