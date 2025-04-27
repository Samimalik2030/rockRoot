import { Property, UpdatePropertyDto } from "../http/Api";

type ICommonPropertyStepsProps = {
  onSuccess: () => void;
  currentStep: number;
  property?: Property;
  onSubmit: (data: UpdatePropertyDto) => void;
  loading: boolean;
  onBack: () => void;
};

export default ICommonPropertyStepsProps;
