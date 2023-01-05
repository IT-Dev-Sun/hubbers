import { combineReducers } from 'redux';
import settings from './settings/reducer';
import communityAll from './community/all/reducer';
import event from './community/event/reducer';
import topic from './community/topic/reducer';
import memberRole from './community/memberRole/reducer';
import member from './community/member/reducer';
import post from './community/post/reducer';
import group from './community/group/reducer';
import courseStructure from './community/course/courseStructure/reducer';
import courseMain from './community/course/courseMain/reducer';
import groupPrivacyOption from './community/groupPrivacyOption/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import userRole from './user-role/reducer';
import users from './user/reducer';
import admins from './admin/reducer';
import adminRole from './admin-role/reducer';
import basicTypeCategory from './options/basic-type-category/reducer';
import basicType from './options/basic-type/reducer';
import expertiseCategory from './options/expertise-category/reducer';
import country from './options/country/reducer';
import currency from './options/currency/reducer';
import timezone from './options/timezone/reducer';
import language from './options/language/reducer';
import projectTag from './options/product-tags/reducer';
import languageLevel from './options/language-level/reducer';
import setting from './options/setting/reducer';
import hubbersTeam from './hubbers-team/reducer';
import job from './job/job/reducer';
import jobCategory from './job/job-category/reducer';
import team from './team/all-teams/reducer';
import teamMember from './team/team-member/reducer';
import teamMemberRole from './team/team-member-role/reducer';
import partner from './partner/partner/reducer';
import partnerType from './partner/partner-type/reducer';
import partnerContact from './partner/partner-contact/reducer';
import moduleType from './module/moduleType/reducer';
import contestList from './contest/contestList/reducer';
import testimonials from './testimonials/reducer';
import allProducts from './product/all-products/reducer';
import allExpertises from './expertise/all-expertise/reducer';
import assessmentQuestions from './product/assessment-questions/reducer';
import assessmentTutorials from './product/assessment-tutorials/reducer';
import contestDescription from './contest/contestDescription/reducer';
import contestEntry from './contest/contestEntry/reducer';
import social from './social/social/reducer';
import contributorRole from './community/contributorRole/reducer';
import topicType from './community/topicType/reducer';

const reducers = combineReducers({
  menu,
  settings,
  admins,
  adminRole,
  authUser,
  userRole,
  users,
  event,
  topic,
  memberRole,
  member,
  post,
  group,
  groupPrivacyOption,
  courseStructure,
  courseMain,
  // options
  basicTypeCategory,
  basicType,
  expertiseCategory,
  country,
  currency,
  projectTag,
  timezone,
  language,
  languageLevel,
  setting,
  communityAll,
  hubbersTeam,
  job,
  jobCategory,
  team,
  teamMember,
  teamMemberRole,
  partner,
  partnerType,
  partnerContact,
  moduleType,
  contestList,
  testimonials,
  allProducts,
  allExpertises,
  assessmentQuestions,
  assessmentTutorials,
  contestDescription,
  contestEntry,
  social,
  contributorRole,
  topicType,
});

export default reducers;
