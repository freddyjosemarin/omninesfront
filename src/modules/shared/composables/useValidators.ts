const useValidators = () => {
  return {
    isRequired: (val: any) => !!val || 'Field is required',

    isEmail: (val: any) =>
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) ||
      'Please enter a valid email',

    isNumber: (val: any) => !isNaN(val) || 'Please enter a valid number',

    isBoolean: (val: any) =>
      typeof val === 'boolean' || 'Please enter a valid boolean',

    isLength: (val: string, length: number) =>
      val.length === length || `Please enter a value with ${length} characters`,

    max: (val: any, max: number) =>
      val.length <= max || `Max ${max} characters`,

    min: (val: any, min: number) =>
      val.length >= min || `Min ${min} characters`,

    maxLength: (val: string, max: number) =>
      val.length <= max || `Max ${max} characters`,

    minLength: (val: string, min: number) =>
      val.length >= min || `Min ${min} characters`,

    isEqual: (val: any, compare: any) =>
      val === compare || 'Fields do not match',

    isUrl: (val: any) =>
      /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i.test(
        val
      ) || 'Please enter a valid url',
  };
};

export default useValidators;
