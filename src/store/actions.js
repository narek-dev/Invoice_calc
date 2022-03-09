import { nanoid } from 'nanoid';

const actions = {
  addProduct(context, data) {
    console.log(data, 'data');
    context.commit('addProduct', {
      ...data,
      id: nanoid(),
    });
  },
  updateSelectedItems (context, payload) {
    console.log(payload)
    if(payload.checked) {
      context.commit('addSelectedItem', payload.id);
    } else {
      context.commit('removeSelectedItem', payload.id);
    }
  },
  deleteSelectedItems(context) {
    context.commit('deleteSelectedItems', context.getters.selectedItems);
    context.commit('editAll', []);
  },
  editAll(context, isAllSelected) {
    if (isAllSelected) {
      const allIds = context.state.products.map((product) => product.id);
      context.commit('editAll', allIds);
    } else {
      context.commit('editAll', []);
    }
  },
};

export default actions;