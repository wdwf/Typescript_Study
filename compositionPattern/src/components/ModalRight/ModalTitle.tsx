type ModalTitleProp = {
  children: React.ReactNode;
}

export const ModalTitle = ({ children }:ModalTitleProp) => {
  return (
    <p className="text-lg font-bold">
      {children}
    </p>
  )
}