interface UserProfileProps {
  children: React.ReactNode;
}

export const UserProfile = ({ children }: UserProfileProps) => {
  return (
    <div>
      <div>Name </div>
      <div>{children}</div>
    </div>
  );
};
