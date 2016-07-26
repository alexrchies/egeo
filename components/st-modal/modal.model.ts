export interface ModalConfig {
  modalSize: SizeConfig;
  title: TitleConfig;
}

interface SizeConfig {
  height: number;
  width: number;
}
interface TitleConfig {
  fontSize: number;
  backgroundColor: string;
}


export interface ModalTitle {
  title: string;
  icon: string;
}