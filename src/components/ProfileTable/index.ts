import ProfileTable from './ProfileTable';
import { Connect } from '../../sevices/store';
import { props as globalProps } from '../../const/props';

export default Connect(ProfileTable, state => {
  const { fields } = globalProps.profile.profileTable;
  return state.user
    ? {
        avatar: state.user.avatar,
        fields: fields?.map(field => {
          return { ...field, ['fieldValue']: state.user[field.name] };
        }),
      }
    : { fields: [] };
});
