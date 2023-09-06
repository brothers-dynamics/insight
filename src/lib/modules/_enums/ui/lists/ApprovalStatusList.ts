import { type ApprovalStatus } from '../../../../graphql/$kitql/graphqlTypes';

export const ApprovalStatusList: Record<ApprovalStatus, string> = {
  APPROVED: 'Approved',
  REJECTED: 'Rejected',
  PENDING: 'Pending',
  REVISION: 'Revision'
};
