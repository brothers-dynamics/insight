import { type Action } from '../../../../graphql/$kitql/graphqlTypes';

export const ActionList: Record<Action, string> = {
  Login: 'Login',
  Logout: 'Logout',
  DocumentCreate: 'Documentcreate',
  DocumentDelete: 'Documentdelete',
  DocumentApprove: 'Documentapprove',
  DocumentRead: 'Documentread',
  UserCreate: 'Usercreate',
  UserDelete: 'Userdelete',
  UserUpdate: 'Userupdate',
  RoleCreate: 'Rolecreate',
  RoleDelete: 'Roledelete',
  RoleUpdate: 'Roleupdate',
  TagCreate: 'Tagcreate',
  TagDelete: 'Tagdelete',
  TagUpdate: 'Tagupdate',
  MessageSend: 'Messagesend',
  MessageRead: 'Messageread'
};
