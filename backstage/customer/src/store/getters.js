const getters = {
  customerList: state => state.customer.list,
  customerInfoForm: state => state.customer.infoFormState,
  addressForm: state => state.customer.itemFormState,
}
export default getters