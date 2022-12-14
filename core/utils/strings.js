import { isEmpty, pickBy,identity } from "lodash";

export function buildQueryString(payload) {
  let query = "";
  let str = [];
  const data = pickBy(payload, identity);
  if (!isEmpty(data)) {
    for (const [key, value] of Object.entries(data)) {
      str.push(encodeURIComponent(key) + "=" + value);
    }
    query = str.join("&");
  }
  return query;
}
