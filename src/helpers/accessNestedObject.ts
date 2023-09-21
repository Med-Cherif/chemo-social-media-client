export default function accessNestedObject(
  object = {},
  key = ""
): string | undefined {
  let result = object;

  const keys = key.split(".");

  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];

    if (result && k in result) {
      result = result[k as keyof typeof result];
    } else {
      return undefined;
    }
  }

  return result as string;
}
