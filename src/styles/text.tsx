import * as React from "react";
import { Text as RNText } from "react-native";


const TextClassContext = React.createContext<string | undefined>(undefined);

const VARIANT_MAP: Record<string, string> = {
  h1: "font-leaf-unz text-4xl",
  h2: "font-leaf-unz text-3xl",
  b1: "font-leaf-unz text-[20px]",
  b2: "font-leaf-unz text-[16px]",
  b3: "font-leaf-unz text-[10px]",
};

const DEFAULT_VARIANT = 'b1';

function textVariants({ type, className }: { type?: string; className?: string }) {
  const base = 'text-base text-black';
  const variant = VARIANT_MAP[type ?? DEFAULT_VARIANT] ?? VARIANT_MAP[DEFAULT_VARIANT];
  return [base, variant, className].filter(Boolean).join(' ');
}

type NativeTextProps = React.ComponentProps<typeof RNText>;
type Props = Omit<NativeTextProps, 'style'> & {
  className?: string;
  asChild?: boolean; // kept for compatibility but not required
  type?: keyof typeof VARIANT_MAP;
};

const Text = React.forwardRef<RNText, Props>(function Text(
  { type, className, asChild = false, children, ...props },
  ref,
) {
  const textClass = React.useContext(TextClassContext);
  const classes = [textVariants({ type, className }), textClass].filter(Boolean).join(' ');

  // We don't require @rn-primitives/slot here; render a normal RN Text.
  return (
    <RNText ref={ref as any} className={classes} {...(props as any)}>
      {children}
    </RNText>
  );
});

Text.displayName = 'Text';

export { Text, TextClassContext };
