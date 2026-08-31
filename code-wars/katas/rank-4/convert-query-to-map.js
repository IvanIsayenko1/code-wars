//In this kata, we want to convert a URL query string into a nested object.
// The query string will contain parameters that may or may not have embedded dots ('.'),
// and these dots will be used to break up the properties into the nested object.
//
// user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
//
//
// {
//   'user': {
//     'name': {
//       'firstname': 'Bob',
//       'lastname': 'Smith'
//     },
//     'favoritecolor': 'Light Blue'
//   }
// }

export function convertQueryToMap(query) {
  const result = {};
  query.split('&').filter(q => q).forEach(q => {
    const [path, value] = q.split('=');
    setToPath(result, path, decodeURIComponent(value));
  });
  return result;
}

function setToPath(object, path, value) {
  const keys = path.split('.');
  let current = object;

  keys.forEach((key, index) => {
    current[key] ??= index === keys.length -1 ? value : {};
    current = current[key];
  })
}
