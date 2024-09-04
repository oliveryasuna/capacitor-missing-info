const applyDefaultProps = (<Props, Key extends (keyof Props)>(props: Props, defaults: Pick<NonNullable<Props>, Key>): (Props & Required<Pick<Props, Key>>) => ({
  ...defaults,
  ...props
} as (Props & Required<Pick<Props, Key>>)));

const removeProps = (<Props extends Record<string, any>, Key extends (keyof Props)>(props: Props, keys: Key[]): Omit<Props, Key> => {
  const newProps: Partial<Props> = {};

  for(const prop in props) {
    if(!keys.includes(prop as unknown as Key)) {
      newProps[prop] = props[prop];
    }
  }

  return (newProps as Omit<Props, Key>);
});

export {
  applyDefaultProps,
  removeProps
};
