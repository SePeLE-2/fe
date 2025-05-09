import { INTERFACE_KITS } from "@/commons/constants/interface";
import useAppearanceStore from "./store";

const useAppearance = () => {
  const { interfaceKit: kitName } = useAppearanceStore();
  return INTERFACE_KITS[kitName || 'donor'];
};

export default useAppearance;
