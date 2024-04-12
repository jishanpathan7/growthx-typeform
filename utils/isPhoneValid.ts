export function isPhoneField(phone: string) {
  const PHONE_SPECIFIC = /^\+?[0-9]{1,3}?[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$/;

  return PHONE_SPECIFIC.test(phone);
}
