let storage = [];

function findItem(id) {
  const foundItem = [];
  let foudIndex = -1;
  //find item
  for (let index = 0; index < storage.length; index++) {
    const item = storage[index];

    if (item.id === id) {
      foundItem.push(item);
      foudIndex = index;
      break;
    }
  }
  return { data: foundItem[0], foudIndex };
}

export function getItemListService() {
  return storage;
}

export function getItemByIdService(id) {
  const found = findItem(id)?.data;

  return found || null;
}

export function createItemService(id, body) {
  body = { id, ...body };

  storage.push(body);

  return body;
}

export function updateItemService({ id, name, desc, isDone }) {
  const foundItem = findItem(id)?.data;
  //update
  if (foundItem) {
    name ? (foundItem.name = name) : foundItem.name;
    desc ? (foundItem.desc = desc) : foundItem.desc;
    isDone ? (foundItem.isDone = isDone) : foundItem.isDone;
  }

  return foundItem;
}

export function deleteItemService(id) {
  const foundItem = findItem(id);

  if (foundItem?.data) {
    if (foundItem.foudIndex > -1) {
      storage.splice(foundItem.foudIndex, 1);
    }
  }

  return "removed";
}
