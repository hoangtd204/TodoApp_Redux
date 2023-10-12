// action set todo
export const setData = (data) => ({
  type: "SetData",
  payload: data,
});
// action dalete todo
export const deleteData = (id) => ({
  type: "DeleteData",
  payload: id,
});
// update todo
export const updateData = (id, data) => ({
  type: "UpdateData",
  id: id,
  payload: data,
});
