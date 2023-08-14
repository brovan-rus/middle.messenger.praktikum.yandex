import { Connect } from '../../sevices/store';
import { props as globalProps } from '../../const/props';
import ProfileForm from './ProfileForm';

export default Connect(ProfileForm, state => {
  const { fields } = globalProps.profile.profileTable;
  return {
    fields: state.user
      ? fields?.map(field => {
          return { ...field, ['fieldValue']: state.user[field.name] };
        })
      : {},
  };
});
