import StyledComponentsRegistry from '../lib/registery';

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <head />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
