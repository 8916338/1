// ==UserScript==
// @name         GitHub 中文化
// @name:zh-CN   GitHub 中文化
// @namespace    shanqiu.plugin.github-zh
// @version      1.0.0
// @description  把 GitHub 界面的固定英文换成中文，仓库名、README、代码和评论内容保持原样
// @author       shanqiu
// @match        https://github.com/*
// @match        https://gist.github.com/*
// @match        https://docs.github.com/*
// @match        https://github.blog/*
// @match        https://education.github.com/*
// @match        https://skills.github.com/*
// @match        https://support.github.com/*
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  if (window.__vieGithubZh) return;
  window.__vieGithubZh = true;

  var MAP = {
    'Pull requests': '拉取请求',
    'Issues': '议题',
    'Marketplace': '应用市场',
    'Explore': '探索',
    'Notifications': '通知',
    'Sign in': '登录',
    'Sign up': '注册',
    'Sign out': '退出登录',
    'Search or jump to...': '搜索或跳转…',
    'Search or jump to…': '搜索或跳转…',
    'Search': '搜索',
    'Type / to search': '按 / 搜索',
    'Go to file': '转到文件',
    'Add file': '添加文件',
    'Code': '代码',
    'Settings': '设置',
    'Your profile': '你的个人资料',
    'Your repositories': '你的仓库',
    'Your organizations': '你的组织',
    'Your projects': '你的项目',
    'Your stars': '你的星标',
    'Your gists': '你的代码片段',
    'Your Copilot': '你的 Copilot',
    'Upgrade': '升级',
    'Features': '功能',
    'Enterprise': '企业版',
    'Team': '团队',
    'Pricing': '定价',
    'Resources': '资源',
    'Support': '支持',
    'Docs': '文档',
    'Blog': '博客',
    'About': '关于',
    'Contact': '联系',
    'Careers': '招聘',
    'Security': '安全',
    'Status': '状态',
    'Training': '培训',
    'Partners': '合作伙伴',
    'Customers': '客户',
    'Community': '社区',
    'Open Source': '开源',
    'Sponsors': '赞助者',
    'New repository': '新建仓库',
    'Import repository': '导入仓库',
    'New organization': '新建组织',
    'New project': '新建项目',
    'New gist': '新建代码片段',
    'Dashboard': '仪表盘',
    'Home': '首页',
    'Profile': '个人资料',
    'Repositories': '仓库',
    'Organizations': '组织',
    'Projects': '项目',
    'Stars': '星标',
    'Saved': '已保存',

    'Watch': '关注',
    'Unwatch': '取消关注',
    'Star': '星标',
    'Unstar': '取消星标',
    'Fork': '派生',
    'Sponsor': '赞助',
    'Pin': '置顶',
    'Unpin': '取消置顶',
    'Branches': '分支',
    'Tags': '标签',
    'Releases': '发行版',
    'Contributors': '贡献者',
    'Languages': '语言',
    'Insights': '洞察',
    'Actions': '操作',
    'Wiki': '百科',
    'Pulse': '动态',
    'Graphs': '图表',
    'Network': '网络',
    'Compare': '比较',
    'New pull request': '新建拉取请求',
    'Create new file': '新建文件',
    'Upload files': '上传文件',
    'Find file': '查找文件',
    'Clone or download': '克隆或下载',
    'Download ZIP': '下载 ZIP',
    'Open with GitHub Desktop': '用 GitHub Desktop 打开',
    'Edit': '编辑',
    'Delete': '删除',
    'Raw': '原始',
    'Blame': '追溯',
    'History': '历史',
    'Copy': '复制',
    'Copy raw contents': '复制原始内容',
    'Preview': '预览',
    'Commit changes': '提交更改',
    'Commit message': '提交信息',
    'Extended description': '详细描述',
    'Commit directly to the': '直接提交到',
    'Create a new branch for this commit and start a pull request': '为此提交新建分支并发起拉取请求',
    'Choose a branch': '选择分支',
    'Default branch': '默认分支',
    'Switch branches/tags': '切换分支/标签',
    'View all branches': '查看所有分支',
    'View all tags': '查看所有标签',
    'Manage topics': '管理主题',
    'Releases ·': '发行版 ·',
    'Latest': '最新',
    'Pre-release': '预发布',
    'Assets': '资源',
    'Source code': '源代码',
    'Source code (zip)': '源代码（zip）',
    'Source code (tar.gz)': '源代码（tar.gz）',
    'No description, website, or topics provided.': '未提供描述、网站或主题。',
    'Readme': '自述文件',
    'License': '许可证',
    'Activity': '活动',
    'Custom properties': '自定义属性',

    'Open': '打开',
    'Closed': '已关闭',
    'Merged': '已合并',
    'Draft': '草稿',
    'New issue': '新建议题',
    'Labels': '标签',
    'Milestones': '里程碑',
    'Assignees': '负责人',
    'Reviewers': '审查者',
    'No one assigned': '未指派',
    'Comments': '评论',
    'Comment': '评论',
    'Write': '编写',
    'Submit new issue': '提交新议题',
    'Close issue': '关闭议题',
    'Reopen issue': '重新打开议题',
    'Close with comment': '评论并关闭',
    'Subscribe': '订阅',
    'Unsubscribe': '取消订阅',
    'Participants': '参与者',
    'Linked pull requests': '关联的拉取请求',
    'Successfully merging a pull request may close this issue.': '合并拉取请求后可能会关闭此议题。',
    'Allow edits by maintainers': '允许维护者编辑',
    'Create pull request': '创建拉取请求',
    'Merge pull request': '合并拉取请求',
    'Squash and merge': '压缩合并',
    'Rebase and merge': '变基合并',
    'Confirm merge': '确认合并',
    'Approve': '批准',
    'Request changes': '请求更改',
    'Files changed': '文件变更',
    'Conversation': '对话',
    'Commits': '提交',
    'Checks': '检查',
    'Resolve conversation': '解决对话',
    'Show resolved': '显示已解决',
    'Hide resolved': '隐藏已解决',
    'Review changes': '审查更改',
    'Submit review': '提交审查',
    'Add your review': '添加你的审查',
    'No description provided.': '未提供描述。',
    'Select all': '全选',
    'Jump to bottom': '跳到末尾',
    'Jump to top': '跳到顶部',
    'Load more': '加载更多',
    'Show more': '显示更多',
    'Show less': '收起',

    'Cancel': '取消',
    'Save': '保存',
    'Save changes': '保存更改',
    'Close': '关闭',
    'Confirm': '确认',
    'Continue': '继续',
    'Back': '返回',
    'Next': '下一步',
    'Previous': '上一步',
    'Done': '完成',
    'Filter': '筛选',
    'Clear': '清除',
    'Apply': '应用',
    'Reset': '重置',
    'Submit': '提交',
    'Update': '更新',
    'Remove': '移除',
    'Add': '添加',
    'Create': '创建',
    'Rename': '重命名',
    'Move': '移动',
    'Duplicate': '复制一份',
    'Archive': '归档',
    'Unarchive': '取消归档',
    'Public': '公开',
    'Private': '私有',
    'Public repository': '公开仓库',
    'Private repository': '私有仓库',
    'Create repository': '创建仓库',
    'Delete this repository': '删除此仓库',
    'Change repository visibility': '更改仓库可见性',
    'Danger zone': '危险区域',
    'Transfer ownership': '转移所有权',
    'Rename this repository': '重命名此仓库',
    'Manage access': '管理访问权限',
    'Invite a collaborator': '邀请协作者',
    'Add people': '添加成员',
    'Loading…': '加载中…',
    'Loading...': '加载中…',
    'Oops!': '出错了！',
    'Page not found': '页面不存在',
    'Rate limit': '速率限制',
    'Something went wrong.': '出错了。',
    'Try again': '重试',
    'Learn more': '了解更多',
    'Read more': '阅读更多',
    'See all': '查看全部',
    'View all': '查看全部',
    'Back to top': '回到顶部',
    'Copied!': '已复制！',
    'Copy link': '复制链接',
    'Permalink': '永久链接',
    'Share': '分享',
    'Download': '下载',
    'Upload': '上传',
    'Browse': '浏览',
    'Choose a file': '选择文件',
    'Drag and drop': '拖放',
    'Required': '必填',
    'Optional': '选填',
    'Enabled': '已启用',
    'Disabled': '已禁用',
    'On': '开',
    'Off': '关',
    'Yes': '是',
    'No': '否',
    'or': '或',
    'and': '和',
    'of': '共',
    'More': '更多',
    'Menu': '菜单',
    'Main': '主菜单',

    'Account': '账户',
    'Appearance': '外观',
    'Accessibility': '无障碍',
    'Billing and plans': '账单与套餐',
    'Emails': '邮箱',
    'Password and authentication': '密码与身份验证',
    'Sessions': '会话',
    'SSH and GPG keys': 'SSH 与 GPG 密钥',
    'Developer settings': '开发者设置',
    'Personal access tokens': '个人访问令牌',
    'Applications': '应用',
    'Authorized OAuth Apps': '已授权的 OAuth 应用',
    'Security log': '安全日志',
    'Blocked users': '已屏蔽的用户',
    'Saved replies': '已保存的回复',
    'Notification settings': '通知设置',
    'Integrations': '集成',
    'Codespaces': '代码空间',
    'Packages': '软件包',
    'Discussions': '讨论',

    'Home feed': '首页动态',
    'Following': '关注中',
    'For you': '为你推荐',
    'Trending': '热门',
    'Recent': '最近',
    'All': '全部',
    'No results matched your search.': '没有匹配的结果。',
    'Search all of GitHub': '搜索整个 GitHub',
    'Repositories you contribute to': '你参与贡献的仓库',
    'Top repositories': '热门仓库',
    'Recent activity': '最近活动'
  };

  var SKIP_TAGS = {
    SCRIPT: 1, STYLE: 1, CODE: 1, PRE: 1, KBD: 1, SAMP: 1, VAR: 1,
    TEXTAREA: 1, INPUT: 1, SVG: 1, NOSCRIPT: 1, TEMPLATE: 1
  };

  var SKIP_SELECTOR = [
    'pre', 'code', 'kbd', 'samp', 'var', 'textarea', 'script', 'style',
    '.markdown-body',
    '.blob-code',
    '.highlight',
    '.react-code-text',
    '.js-comment-body',
    '.comment-body',
    '[data-testid="readme"]',
    '[contenteditable="true"]',
    '.file-diff-split',
    '.diff-table'
  ].join(',');

  function skipNode(node) {
    var el = node.nodeType === 3 ? node.parentElement : node;
    if (!el) return true;
    if (SKIP_TAGS[el.tagName]) return true;
    try {
      if (el.closest && el.closest(SKIP_SELECTOR)) return true;
    } catch (e) {
    }
    return false;
  }

  function lookup(s) {
    if (MAP[s]) return MAP[s];
    var m = s.match(/^(.+?)(\s*[·(（]?\s*\d+\+?\)?)$/);
    if (m && MAP[m[1]]) return MAP[m[1]] + m[2];
    var m2 = s.match(/^(.+?)([:：])$/);
    if (m2 && MAP[m2[1]]) return MAP[m2[1]] + m2[2];
    return null;
  }

  function translateText(t) {
    var raw = t.nodeValue;
    if (!raw) return;
    var s = raw.trim();
    if (s.length < 2 || s.length > 64) return;
    var zh = lookup(s);
    if (!zh || zh === s) return;
    var lead = raw.match(/^\s*/)[0];
    var tail = raw.match(/\s*$/)[0];
    t.nodeValue = lead + zh + tail;
  }

  function inSkipArea(el) {
    try {
      return !!(el.closest && el.closest(SKIP_SELECTOR));
    } catch (e) {
      return false;
    }
  }

  function translateAttrs(root) {
    if (!root.querySelectorAll) return;
    var list;
    try {
      list = root.querySelectorAll('[title],[placeholder],[aria-label],[alt]');
    } catch (e) {
      return;
    }
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      if (inSkipArea(el)) continue;
      ['title', 'placeholder', 'aria-label', 'alt'].forEach(function (attr) {
        var v = el.getAttribute(attr);
        if (!v) return;
        var s = v.trim();
        if (!s || s.length > 64) return;
        var zh = lookup(s);
        if (zh && zh !== s) el.setAttribute(attr, zh);
      });
    }
  }

  function translate(root) {
    if (!root) return;
    if (root.nodeType === 3) {
      if (!skipNode(root)) translateText(root);
      return;
    }
    if (root.nodeType !== 1 && root.nodeType !== 9) return;
    try {
      var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
          return skipNode(n) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }
      });
      var n;
      var guard = 0;
      while ((n = walker.nextNode())) {
        translateText(n);
        if (++guard > 6000) break;
      }
    } catch (e) {
    }
    translateAttrs(root);
  }

  var timer = null;
  var queue = [];

  function flush() {
    timer = null;
    var list = queue;
    queue = [];
    for (var i = 0; i < list.length; i++) {
      try {
        translate(list[i]);
      } catch (e) {
      }
    }
  }

  function observe() {
    if (!document.body) return;
    var obs = new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.type !== 'childList') continue;
        for (var j = 0; j < m.addedNodes.length; j++) {
          var n = m.addedNodes[j];
          if (n.nodeType === 1 || n.nodeType === 3) queue.push(n);
        }
      }
      if (!queue.length) return;
      if (timer) return;
      timer = setTimeout(flush, 240);
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }

  function run() {
    translate(document.body);
    observe();
  }

  function later() {
    setTimeout(function () {
      translate(document.body);
    }, 60);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  ['turbo:load', 'turbo:render', 'pjax:end', 'page:load'].forEach(function (ev) {
    document.addEventListener(ev, later);
  });
  window.addEventListener('popstate', later);

  window.addEventListener('scroll', function () {
    if (timer) return;
    timer = setTimeout(function () {
      timer = null;
      translate(document.body);
    }, 400);
  }, { passive: true });
})();