import { adminRoot } from './defaultValues';
import { UserRole } from '../helpers/authHelper';

const data = [
  {
    id: 'dashboards',
    icon: 'iconsminds-shop-4',
    label: 'menu.dashboards',
    to: `${adminRoot}/dashboard`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-briefcase',
        label: 'menu.default',
        to: `${adminRoot}/dashboard/default`,
        // roles: [UserRole.Admin],
      },
      {
        icon: 'simple-icon-doc',
        label: 'menu.content',
        to: `${adminRoot}/dashboard/content`,
        // roles: [UserRole.Editor],
      },
    ],
  },
  {
    id: 'admins',
    icon: 'iconsminds-user',
    label: 'menu.admins',
    roles: [UserRole.Admin],
    to: `${adminRoot}/admins`,
  },
  {
    id: 'users',
    icon: 'iconsminds-user',
    label: 'menu.users',
    to: `${adminRoot}/users`,
  },
  {
    id: 'community',
    icon: 'iconsminds-shop-4',
    label: 'menu.community',
    to: `${adminRoot}/community`,
    subs: [
      {
        icon: 'simple-icon-doc',
        label: 'menu.community',
        to: `${adminRoot}/community/all`,
      },
      {
        icon: 'simple-icon-doc',
        label: 'menu.member',
        to: `${adminRoot}/community/member`,
      },
      {
        icon: 'simple-icon-doc',
        label: 'menu.topic',
        to: `${adminRoot}/community/topic`,
      },
      {
        icon: 'simple-icon-doc',
        label: 'menu.post',
        to: `${adminRoot}/community/post`,
      },
      {
        icon: 'simple-icon-doc',
        label: 'menu.event',
        to: `${adminRoot}/community/event`,
      },
      {
        icon: 'simple-icon-doc',
        label: 'menu.group',
        to: `${adminRoot}/community/group`,
      },
      {
        icon: 'simple-icon-doc',
        label: 'menu.course-structure',
        to: `${adminRoot}/community/course/structure`,
      },
      {
        icon: 'simple-icon-doc',
        label: 'menu.course',
        to: `${adminRoot}/community/course`,
      },
    ],
  },
  {
    id: 'investors',
    icon: 'iconsminds-user',
    label: 'menu.investors',
    to: `${adminRoot}/investors`,
  },
  {
    id: 'hubbers-team',
    icon: 'iconsminds-user',
    label: 'menu.hubbers-team',
    to: `${adminRoot}/hubbers-team`,
  },
  {
    id: 'team',
    icon: 'iconsminds-user',
    label: 'menu.team',
    roles: [UserRole.Admin, UserRole.Editor],
    to: `${adminRoot}/team`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.all-teams',
        to: `${adminRoot}/team/all-teams`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.team-member',
        to: `${adminRoot}/team/team-member`,
      },
      // {
      //   icon: 'simple-icon-paper-plane',
      //   label: 'menu.team-member-role',
      //   to: `${adminRoot}/team/team-member-role`,
      // },
    ],
  },
  {
    id: 'module',
    icon: 'iconsminds-user',
    label: 'menu.module',
    roles: [UserRole.Admin, UserRole.Editor],
    to: `${adminRoot}/module`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.module-type',
        to: `${adminRoot}/module/module-type`,
      },
      // {
      //   icon: 'simple-icon-paper-plane',
      //   label: 'menu.team-member',
      //   to: `${adminRoot}/team/team-member`,
      // },
      // {
      //   icon: 'simple-icon-paper-plane',
      //   label: 'menu.team-member-role',
      //   to: `${adminRoot}/team/team-member-role`,
      // },
    ],
  },
  {
    id: 'contest',
    icon: 'iconsminds-shop-4',
    label: 'menu.contest',
    roles: [UserRole.Admin, UserRole.Editor],
    to: `${adminRoot}/contest`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.contest-list',
        to: `${adminRoot}/contest/contest-list`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.contest-member',
        to: `${adminRoot}/contest/contest-member`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.contest-description',
        to: `${adminRoot}/contest/contest-description`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.contest-entry',
        to: `${adminRoot}/contest/contest-entry`,
      },
    ],
  },
  {
    id: 'partner',
    icon: 'iconsminds-user',
    label: 'menu.partner',
    roles: [UserRole.Admin, UserRole.Editor],
    to: `${adminRoot}/partner`,
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.partner-list',
        to: `${adminRoot}/partner/partner-list`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.partner-type',
        to: `${adminRoot}/partner/partner-type`,
      },
    ],
  },
  {
    id: 'testimonials',
    icon: 'iconsminds-user',
    label: 'menu.testimonials',
    to: `${adminRoot}/testimonials`,
  },
  {
    id: 'job-list',
    icon: 'iconsminds-three-arrow-fork',
    label: 'menu.job-list',
    to: `${adminRoot}/job-list`,
    roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.all-jobs',
        to: `${adminRoot}/job-list/all-jobs`,
      },
    ],
  },
  {
    id: 'product',
    icon: 'iconsminds-three-arrow-fork',
    label: 'menu.product',
    to: `${adminRoot}/product`,
    roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.all-products',
        to: `${adminRoot}/product/all-products`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.assessment-questions',
        to: `${adminRoot}/product/assessment-questions`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.assessment-tutorials',
        to: `${adminRoot}/product/assessment-tutorials`,
      },
    ],
  },
  {
    id: 'expertise',
    icon: 'iconsminds-three-arrow-fork',
    label: 'menu.expertise',
    to: `${adminRoot}/expertise`,
    roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.all-expertises',
        to: `${adminRoot}/expertise/all-expertises`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.assessment-questions',
        to: `${adminRoot}/product/assessment-questions`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.assessment-tutorials',
        to: `${adminRoot}/product/assessment-tutorials`,
      },
    ],
  },
  {
    id: 'options',
    icon: 'iconsminds-three-arrow-fork',
    label: 'menu.options',
    to: `${adminRoot}/options`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.basicTypeCategory',
        to: `${adminRoot}/options/basic-type-category`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.basicType',
        to: `${adminRoot}/options/basic-type`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.expertiseCategory',
        to: `${adminRoot}/options/expertise-category`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.productTags',
        to: `${adminRoot}/options/project-tags`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.language',
        to: `${adminRoot}/options/language`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.language-level',
        to: `${adminRoot}/options/language-level`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.country',
        to: `${adminRoot}/options/country`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.currency',
        to: `${adminRoot}/options/currency`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.timezone',
        to: `${adminRoot}/options/timezone`,
      },
      // {
      //   icon: 'simple-icon-paper-plane',
      //   label: 'menu.setting',
      //   to: `${adminRoot}/options/setting`,
      // },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.social',
        to: `${adminRoot}/options/social`,
      },
    ],
  },
  // {
  //   id: 'docs',
  //   icon: 'iconsminds-library',
  //   label: 'menu.docs',
  //   to: 'https://gogo-react-docs.coloredstrategies.com/',
  //   newWindow: true,
  // },
];
export default data;
