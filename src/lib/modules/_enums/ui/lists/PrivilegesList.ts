import { type Privileges } from '../../../../graphql/$kitql/graphqlTypes';

export const PrivilegesList: Record<Privileges, string> = {
  ADMIN: 'Admin',
  CREATE_USER: 'CreateUser',
  UPDATE_USER: 'UpdateUser',
  CREATE_KNOWLEDGE: 'CreateKnowledge',
  APPROVE_KNOWLEDGE: 'ApproveKnowledge',
  CREATE_MANUAL: 'CreateManual',
  APPROVE_MANUAL: 'ApproveManual',
  CREATE_PROCEDURE: 'CreateProcedure',
  APPROVE_PROCEDURE: 'ApproveProcedure',
  CREATE_POLICY: 'CreatePolicy',
  APPROVE_POLICY: 'ApprovePolicy',
  CREATE_TAG: 'CreateTag',
  UPDATE_TAG: 'UpdateTag',
  CREATE_ROLE: 'CreateRole',
  UPDATE_ROLE: 'UpdateRole'
};
