/* @ds-bundle: {"format":4,"namespace":"LeadboxDesignSystem_3e2c7f","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Spinner","sourcePath":"components/core/Spinner.jsx"},{"name":"TagBadge","sourcePath":"components/core/TagBadge.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"EmptyDataCard","sourcePath":"components/data/EmptyDataCard.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"ConfirmModal","sourcePath":"components/feedback/ConfirmModal.jsx"},{"name":"Drawer","sourcePath":"components/feedback/Drawer.jsx"},{"name":"Notification","sourcePath":"components/feedback/Notification.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"ToggleSwitch","sourcePath":"components/forms/ToggleSwitch.jsx"},{"name":"SubTabs","sourcePath":"components/navigation/SubTabs.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"AppSidebar","sourcePath":"components/shell/AppSidebar.jsx"},{"name":"Topbar","sourcePath":"components/shell/Topbar.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"9923071b461c","components/core/Button.jsx":"04674d36e275","components/core/Icon.jsx":"93de4b80a1ef","components/core/Spinner.jsx":"d0b946ea0148","components/core/TagBadge.jsx":"c907c8b7c04b","components/data/DataTable.jsx":"c9192f8f86a7","components/data/EmptyDataCard.jsx":"76ad257271b6","components/data/Pagination.jsx":"0979786ac43b","components/data/StatCard.jsx":"9675584a69a0","components/feedback/ConfirmModal.jsx":"27f0ff7236d4","components/feedback/Drawer.jsx":"f21ac967b8c9","components/feedback/Notification.jsx":"2a51a72d64c5","components/feedback/Tooltip.jsx":"998bb482418f","components/forms/Checkbox.jsx":"d9a1a9d63ae6","components/forms/Input.jsx":"4f26e7e6385e","components/forms/Select.jsx":"fa88074e98e3","components/forms/ToggleSwitch.jsx":"8629e8281d9a","components/navigation/SubTabs.jsx":"564186ba8f5d","components/navigation/Tabs.jsx":"39ae5e5d6b43","components/shell/AppSidebar.jsx":"db5a8286d7a1","components/shell/Topbar.jsx":"3072133cc4a5","ui_kits/leadbox_os/AppFrame.jsx":"9f0c95dcdff4","ui_kits/leadbox_os/CrmDashboard.jsx":"a7e94f4c2fcc","ui_kits/leadbox_os/ImsInventory.jsx":"c0ed773962e0","ui_kits/leadbox_os/LenaDashboard.jsx":"64a2b5ec3da5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LeadboxDesignSystem_3e2c7f = window.LeadboxDesignSystem_3e2c7f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const AVATAR_PALETTE = ["#0053ba", "#599fbb", "#8062a0", "#b75f86", "#c1404c", "#dda831", "#72bc8e", "#02aaa4", "#f27430", "#1a8245"];
function hashName(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 100000;
  return h;
}
const SIZE = {
  xs: [24, 10],
  sm: [32, 12],
  md: [40, 14],
  lg: [48, 16],
  xl: [56, 18]
};

/** Deterministic-colour initials avatar — recreation of ui/UserAvatar.vue */
function Avatar({
  name = "",
  initials,
  size = "md",
  style,
  ...rest
}) {
  const [px, fs] = SIZE[size] || SIZE.md;
  const resolved = initials || (() => {
    const parts = String(name).trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "?";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  })();
  const color = AVATAR_PALETTE[hashName(name || resolved) % AVATAR_PALETTE.length];
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-label": name || undefined,
    style: {
      display: "inline-flex",
      flexShrink: 0,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-full)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--font-weight-semibold)",
      color: "#fff",
      width: px,
      height: px,
      fontSize: fs,
      background: color,
      ...style
    }
  }, rest), resolved);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  default: {
    height: 40,
    padding: "8px 16px"
  },
  sm: {
    height: 36,
    padding: "0 12px"
  },
  md: {
    height: 40,
    padding: "0 16px"
  },
  lg: {
    height: 44,
    padding: "0 32px"
  },
  icon: {
    height: 40,
    width: 40,
    padding: 0
  }
};
const TONES = {
  primary: {
    default: {
      background: "var(--color-primary)",
      color: "#fff",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-xs)",
      hoverBg: "var(--color-primary-variant)"
    },
    critical: {
      background: "var(--color-surface)",
      color: "var(--color-red-dark)",
      border: "1px solid var(--color-red)",
      boxShadow: "var(--shadow-xs)",
      hoverBg: "var(--color-red-dark)",
      hoverColor: "var(--color-dark-8)"
    },
    success: {
      background: "var(--color-green)",
      color: "#fff",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-xs)",
      hoverBg: "var(--color-green-dark)",
      hoverColor: "var(--color-dark-8)"
    },
    danger: {
      background: "#dc2626",
      color: "#fff",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-xs)",
      hoverBg: "#ef4444"
    }
  },
  secondary: {
    default: {
      background: "var(--color-surface)",
      color: "var(--color-primarytext)",
      border: "1px solid var(--color-stroke)",
      boxShadow: "var(--shadow-xs)",
      hoverBg: "var(--color-page)",
      hoverBorder: "var(--color-dark-7)"
    },
    critical: {
      background: "var(--color-surface)",
      color: "var(--color-red-dark)",
      border: "1px solid var(--color-red)",
      boxShadow: "var(--shadow-xs)",
      hoverBg: "var(--color-red-dark)",
      hoverColor: "var(--color-dark-8)"
    },
    success: {
      background: "var(--color-green)",
      color: "#fff",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-xs)",
      hoverBg: "var(--color-green-dark)"
    },
    danger: {
      background: "var(--color-surface)",
      color: "#dc2626",
      border: "1px solid #fca5a5",
      boxShadow: "var(--shadow-xs)",
      hoverBg: "#fef2f2",
      hoverBorder: "#f87171"
    }
  },
  tertiary: {
    default: {
      background: "transparent",
      color: "var(--color-primarytext)",
      border: "1px solid transparent",
      hoverBg: "var(--color-page)"
    },
    critical: {
      background: "var(--color-surface)",
      color: "var(--color-red-dark)",
      border: "1px solid var(--color-red)",
      hoverBg: "var(--color-red-dark)",
      hoverColor: "var(--color-dark-8)"
    },
    success: {
      background: "var(--color-green)",
      color: "#fff",
      border: "1px solid transparent",
      hoverBg: "var(--color-green-dark)"
    },
    danger: {
      background: "transparent",
      color: "#dc2626",
      border: "1px solid transparent",
      hoverBg: "#fef2f2"
    }
  },
  plain: {
    default: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "1px solid transparent",
      hoverUnderline: true
    },
    critical: {
      background: "var(--color-surface)",
      color: "var(--color-red-dark)",
      border: "1px solid var(--color-red)",
      hoverBg: "var(--color-red-dark)",
      hoverColor: "var(--color-dark-8)"
    },
    success: {
      background: "var(--color-green)",
      color: "#fff",
      border: "1px solid transparent",
      hoverBg: "var(--color-green-dark)"
    },
    danger: {
      background: "transparent",
      color: "#dc2626",
      border: "1px solid transparent",
      hoverUnderline: true
    }
  }
};

/** Leadbox OS button — recreation of resources/js/components/ui/Button.vue */
function Button({
  variant = "primary",
  tone = "default",
  size = "default",
  loading = false,
  disabled = false,
  as = "button",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const t = (TONES[variant] || TONES.primary)[tone] || TONES[variant].default;
  const s = SIZES[size] || SIZES.default;
  const Tag = as;
  const isOff = disabled || loading;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    whiteSpace: "nowrap",
    borderRadius: "var(--radius-md)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    fontWeight: "var(--font-weight-medium)",
    transition: "all var(--duration-base) var(--ease-standard)",
    cursor: isOff ? "not-allowed" : "pointer",
    height: s.height,
    width: s.width,
    padding: s.padding,
    background: t.background,
    color: t.color,
    border: t.border,
    boxShadow: t.boxShadow
  };
  if (isOff) {
    Object.assign(base, variant === "primary" && tone === "default" ? {
      background: "var(--color-dark-6)",
      boxShadow: "none",
      color: "#fff"
    } : {
      background: "var(--color-dark-8)",
      borderColor: "var(--color-dark-6)",
      color: "var(--color-ink-4)",
      boxShadow: "none"
    });
    if (variant === "plain" || variant === "tertiary") Object.assign(base, {
      background: "transparent",
      color: "var(--color-secondarytext)",
      borderColor: "transparent"
    });
  } else if (hover) {
    if (t.hoverBg) base.background = t.hoverBg;
    if (t.hoverColor) base.color = t.hoverColor;
    if (t.hoverBorder) base.borderColor = t.hoverBorder;
    if (t.hoverUnderline) base.textDecoration = "underline";
  }
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === "button" ? isOff : undefined,
    style: {
      ...base,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children, loading ? /*#__PURE__*/React.createElement(Spinner, {
    size: 20
  }) : null);
}
function Spinner({
  size
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      border: "2px solid rgba(255,255,255,0.35)",
      borderTopColor: "currentColor",
      display: "inline-block",
      animation: "lbx-spin 0.7s linear infinite"
    }
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = "https://cdn.jsdelivr.net/npm/heroicons@2.2.0";

/**
 * Heroicons glyph rendered as a CSS mask so it inherits `currentColor`.
 * Leadbox OS uses Heroicons as its primary icon set (Lucide as secondary);
 * this wrapper is the design-system stand-in for `@heroicons/vue`.
 */
function Icon({
  name,
  variant = "outline",
  size = 24,
  style,
  ...rest
}) {
  const dir = variant === "solid" ? "24/solid" : variant === "mini" ? "20/solid" : "24/outline";
  const url = `url("${BASE}/${dir}/${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      flexShrink: 0,
      width: size,
      height: size,
      background: "currentColor",
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Branded arc spinner — recreation of utils/BaseSpinner.vue */
function Spinner({
  size = 20,
  primaryColor = "#007595",
  secondaryColor = "#E5E7EB",
  strokeWidth = 1.5,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      border: `${strokeWidth * 2}px solid ${secondaryColor}`,
      borderTopColor: primaryColor,
      animation: "lbx-spin 0.7s linear infinite",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/core/TagBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const C = {
  primary: {
    fill: ["var(--color-primary)", "#fff", "var(--color-primary)"],
    outline: ["var(--color-surface)", "var(--color-primary)", "var(--color-primary)"],
    duotone: ["var(--color-blue-light-5)", "var(--color-primary)", "var(--color-blue-light-5)"]
  },
  secondary: {
    fill: ["var(--color-secondary)", "#fff", "var(--color-secondary)"],
    outline: ["var(--color-surface)", "var(--color-ink-brand)", "var(--color-secondary)"],
    duotone: ["var(--color-stroke)", "var(--color-ink-brand)", "var(--color-stroke)"]
  },
  dark: {
    fill: ["var(--color-dark)", "#fff", "var(--color-dark)"],
    outline: ["var(--color-surface)", "var(--color-ink)", "var(--color-dark)"],
    duotone: ["var(--color-page)", "var(--color-ink)", "var(--color-gray-2)"]
  },
  gray: {
    fill: ["var(--color-dark-4)", "#fff", "var(--color-dark-4)"],
    outline: ["var(--color-surface)", "var(--color-ink-3)", "var(--color-dark-4)"],
    duotone: ["var(--color-page)", "var(--color-ink-3)", "var(--color-gray-2)"]
  },
  light: {
    fill: ["var(--color-dark-6)", "#fff", "var(--color-dark-6)"],
    outline: ["var(--color-surface)", "var(--color-dark-6)", "var(--color-dark-6)"],
    duotone: ["var(--color-page)", "var(--color-dark-6)", "var(--color-gray-2)"]
  },
  warning: {
    fill: ["var(--color-yellow-dark)", "#fff", "var(--color-yellow-dark)"],
    outline: ["var(--color-surface)", "var(--color-yellow-dark)", "var(--color-yellow-dark)"],
    duotone: ["var(--color-yellow-light-4)", "var(--color-yellow-dark)", "var(--color-yellow-light-4)"]
  },
  danger: {
    fill: ["var(--color-red)", "#fff", "var(--color-red)"],
    outline: ["var(--color-surface)", "var(--color-red)", "var(--color-red)"],
    duotone: ["var(--color-red-light-6)", "var(--color-red)", "var(--color-red-light-6)"]
  },
  success: {
    fill: ["var(--color-green-dark)", "#fff", "var(--color-green-dark)"],
    outline: ["var(--color-surface)", "var(--color-green-dark)", "var(--color-green-dark)"],
    duotone: ["var(--color-green-light-6)", "var(--color-green-dark)", "var(--color-green-light-6)"]
  },
  info: {
    fill: ["var(--color-cyan)", "#fff", "var(--color-cyan)"],
    outline: ["var(--color-surface)", "var(--color-cyan)", "var(--color-cyan)"],
    duotone: ["var(--color-cyan-light-3)", "var(--color-cyan)", "var(--color-cyan-light-3)"]
  },
  orange: {
    fill: ["var(--color-orange-dark)", "#fff", "var(--color-orange-dark)"],
    outline: ["var(--color-surface)", "var(--color-orange-dark)", "var(--color-orange-dark)"],
    duotone: ["var(--color-orange-light-3)", "var(--color-orange-dark)", "var(--color-orange-light-3)"]
  },
  dark_red: {
    fill: ["#fef2f2", "#fff", "#fef2f2"],
    outline: ["var(--color-surface)", "var(--color-red-dark)", "#fef2f2"],
    duotone: ["var(--color-red-light-4)", "var(--color-red-dark)", "var(--color-red-light-4)"]
  }
};

/** Status chip — recreation of resources/js/components/utils/TagBadge.vue */
function TagBadge({
  type = "primary",
  variant = "duotone",
  children,
  style,
  ...rest
}) {
  const [bg, fg, ring] = (C[type] || C.primary)[variant] || C.primary.duotone;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      borderRadius: "var(--radius-md)",
      padding: "2px 6px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      lineHeight: "var(--text-xs--line-height)",
      fontWeight: "var(--font-weight-medium)",
      background: bg,
      color: fg,
      boxShadow: `inset 0 0 0 1px ${ring}`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TagBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TagBadge.jsx", error: String((e && e.message) || e) }); }

// components/data/EmptyDataCard.jsx
try { (() => {
/** Dashed empty / unavailable state — recreation of utils/EmptyDataCard.vue */
function EmptyDataCard({
  icon,
  title,
  message,
  action,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: "2px dashed var(--color-line-strong)",
      borderRadius: "var(--radius-lg)",
      minHeight: 200,
      padding: 16,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "var(--font-sans)",
      background: hover ? "var(--color-subtle)" : "transparent",
      transition: "all var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 48,
    style: {
      color: "#9ca3af",
      marginBottom: 16
    }
  }) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontSize: "var(--text-lg)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-ink)"
    }
  }, title) : null, message ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-xs)",
      color: "#9ca3af",
      maxWidth: 420
    }
  }, message) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: action.onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      borderRadius: "var(--radius-md)",
      padding: "8px 12px",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--font-weight-semibold)",
      boxShadow: "var(--shadow-sm)",
      cursor: "pointer",
      background: action.primary ? "var(--color-blue)" : "var(--color-surface)",
      color: action.primary ? "#fff" : "var(--color-ink)",
      border: action.primary ? "1px solid transparent" : "1px solid var(--color-line-strong)"
    }
  }, action.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: action.icon,
    size: 20
  }) : null, action.label)) : null, children);
}
Object.assign(__ds_scope, { EmptyDataCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/EmptyDataCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Pagination.jsx
try { (() => {
const navBtn = {
  display: "inline-flex",
  alignItems: "center",
  borderRadius: "var(--radius-md)",
  padding: "8px",
  background: "none",
  border: "none",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-xs)",
  fontWeight: "var(--font-weight-bold)",
  color: "var(--color-ink)",
  cursor: "pointer",
  transition: "all var(--duration-base) var(--ease-standard)"
};
function pageList(current, totalPages, maxVisible = 3) {
  if (totalPages <= 1) return [];
  if (totalPages <= maxVisible + 2) return Array.from({
    length: totalPages
  }, (_, i) => i + 1);
  const half = Math.floor(maxVisible / 2);
  let start = Math.max(1, current - half);
  let end = Math.min(totalPages, current + half);
  if (current <= half + 1) end = maxVisible;
  if (current >= totalPages - half) start = totalPages - maxVisible + 1;
  const pages = [];
  if (start > 1) {
    pages.push(1);
    if (start > 2) pages.push("...");
  }
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < totalPages) {
    if (end < totalPages - 1) pages.push("...");
    pages.push(totalPages);
  }
  return pages;
}

/** Table pagination bar — recreation of utils/Pagination.vue */
function Pagination({
  total = 0,
  page = 1,
  perPage = 25,
  perPageOptions = [25, 50, 100, "ALL"],
  onPageChange,
  onPerPageChange,
  style
}) {
  const totalPages = perPage === "ALL" ? 1 : Math.max(1, Math.ceil(total / perPage));
  const start = perPage === "ALL" ? 1 : (page - 1) * perPage + 1;
  const end = perPage === "ALL" ? total : Math.min(page * perPage, total);
  const go = p => onPageChange && typeof p === "number" && p >= 1 && p <= totalPages && onPageChange(p);
  if (!total) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 0",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-primary)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--font-weight-bold)",
      color: "var(--color-secondarytext)"
    }
  }, "Showing ", /*#__PURE__*/React.createElement("span", null, start), " to ", /*#__PURE__*/React.createElement("span", null, end), " of ", /*#__PURE__*/React.createElement("span", null, total), " results"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-primarytext)",
      marginRight: 8
    }
  }, "Rows per page: "), /*#__PURE__*/React.createElement("select", {
    value: perPage,
    onChange: e => onPerPageChange && onPerPageChange(e.target.value === "ALL" ? "ALL" : Number(e.target.value)),
    style: {
      appearance: "none",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--color-stroke)",
      background: "var(--color-surface)",
      padding: "6px 24px 6px 8px",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-primarytext)"
    }
  }, perPageOptions.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    variant: "mini",
    size: 16,
    style: {
      position: "absolute",
      right: 6,
      top: "50%",
      marginTop: -8,
      color: "var(--color-secondarytext)",
      pointerEvents: "none"
    }
  }))), totalPages > 1 ? /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Pagination",
    style: {
      display: "inline-flex",
      gap: 8,
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      ...navBtn,
      opacity: page === 1 ? 0.3 : 1
    },
    onClick: () => go(1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-double-left",
    variant: "mini",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      ...navBtn,
      opacity: page === 1 ? 0.3 : 1
    },
    onClick: () => go(page - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    variant: "mini",
    size: 20
  })), pageList(page, totalPages).map((p, i) => p === "..." ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      ...navBtn,
      background: "var(--color-subtle)",
      color: "var(--color-ink-4)",
      padding: "8px 16px"
    }
  }, "...") : /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => go(p),
    "aria-current": p === page ? "page" : undefined,
    style: {
      ...navBtn,
      padding: "8px 16px",
      background: p === page ? "var(--color-primary)" : "none",
      color: p === page ? "#fff" : "var(--color-ink)"
    }
  }, p)), /*#__PURE__*/React.createElement("button", {
    style: {
      ...navBtn,
      opacity: page >= totalPages ? 0.3 : 1
    },
    onClick: () => go(page + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    variant: "mini",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      ...navBtn,
      opacity: page >= totalPages ? 0.3 : 1
    },
    onClick: () => go(totalPages)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-double-right",
    variant: "mini",
    size: 20
  }))) : null);
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
/** KPI card — recreation of utils/StatCard.vue */
function StatCard({
  name,
  stat,
  unit,
  ratio,
  change,
  changeType,
  breakdown,
  leadstreamStyle = false,
  detailed = false,
  clickable = false,
  onClick,
  isLoading = false,
  statColor,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const borderColor = leadstreamStyle && changeType && !detailed ? changeType === "increase" ? "var(--color-green-dark)" : "var(--color-red-dark)" : "var(--color-stroke)";
  const total = (breakdown || []).reduce((s, r) => s + (r.count || 0), 0);
  return /*#__PURE__*/React.createElement("div", {
    onClick: clickable ? onClick : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: "var(--radius-lg)",
      padding: 16,
      fontFamily: "var(--font-sans)",
      background: leadstreamStyle && !detailed ? "var(--color-subtle)" : "var(--color-surface)",
      border: `1px solid ${clickable && hover ? "var(--color-primary)" : borderColor}`,
      boxShadow: clickable && hover ? "var(--shadow-md)" : undefined,
      cursor: clickable ? "pointer" : "default",
      transition: "all var(--duration-slow) var(--ease-standard)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-secondarytext)",
      fontSize: detailed ? "var(--text-base)" : "var(--text-lg)"
    }
  }, name), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      marginTop: 4,
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--font-weight-bold)",
      fontSize: detailed ? "var(--text-2xl)" : "var(--text-4xl)",
      color: statColor || "var(--color-primarytext)"
    }
  }, isLoading ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      height: 32,
      width: 80,
      borderRadius: 4,
      background: "var(--color-soft-2)",
      animation: "lbx-pulse 1.6s ease-in-out infinite"
    }
  }) : stat, !isLoading && ratio !== undefined ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: "var(--text-base)",
      fontWeight: "var(--font-weight-normal)",
      color: "var(--color-secondarytext)"
    }
  }, ratio, " %") : null, !leadstreamStyle && !isLoading && unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontSize: "var(--text-base)",
      fontWeight: "var(--font-weight-normal)",
      color: "var(--color-ink)"
    }
  }, unit) : null), leadstreamStyle && changeType && !detailed ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: changeType === "increase" ? "arrow-trending-up" : "arrow-trending-down",
    size: 24,
    style: {
      color: changeType === "increase" ? "var(--color-green-dark)" : "var(--color-red-dark)"
    }
  }) : null), breakdown && breakdown.length && !isLoading ? /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: 8,
      width: "100%",
      overflow: "hidden",
      borderRadius: "var(--radius-full)",
      background: "var(--color-soft-2)"
    }
  }, breakdown.filter(r => (r.count || 0) > 0).map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      width: `${r.count / total * 100}%`,
      background: r.color
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: "flex",
      flexWrap: "wrap",
      gap: "4px 16px",
      fontSize: "var(--text-xs)"
    }
  }, breakdown.map(r => /*#__PURE__*/React.createElement("span", {
    key: r.label,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: r.color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--color-primarytext)"
    }
  }, (r.count ?? 0).toLocaleString()), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-secondarytext)"
    }
  }, r.label))))) : /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      marginTop: 4,
      fontSize: "var(--text-xs)",
      fontWeight: "var(--font-weight-medium)",
      color: detailed || !changeType ? "var(--color-secondarytext)" : changeType === "increase" ? "var(--color-green-dark)" : "var(--color-red-dark)"
    }
  }, leadstreamStyle ? detailed ? unit : change ? `${change} MoM` : unit || "" : null));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ConfirmModal.jsx
try { (() => {
const ICONS = {
  warning: {
    name: "exclamation-triangle",
    bg: "#fee2e2",
    color: "#dc2626"
  },
  info: {
    name: "information-circle",
    bg: "#dbeafe",
    color: "#2563eb"
  },
  success: {
    name: "check-circle",
    bg: "#dcfce7",
    color: "#16a34a"
  },
  question: {
    name: "question-mark-circle",
    bg: "#ffedd5",
    color: "#ea580c"
  }
};
const CONFIRM_BG = {
  primary: "var(--color-primary)",
  red: "#dc2626",
  blue: "#2563eb",
  green: "#16a34a",
  yellow: "#ca8a04",
  indigo: "#4f46e5"
};

/** Centered confirm dialog — recreation of utils/BaseConfirmModal.vue */
function ConfirmModal({
  open = true,
  title = "Confirm Action",
  description = "Are you sure you want to proceed with this action?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmColor = "red",
  iconType = "warning",
  onConfirm,
  onCancel,
  children,
  style
}) {
  if (!open) return null;
  const ic = ICONS[iconType] || ICONS.warning;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--overlay-dialog)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: 512,
      overflow: "hidden",
      borderRadius: "var(--radius-lg)",
      background: "var(--color-surface)",
      boxShadow: "var(--shadow-xl)",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexShrink: 0,
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-full)",
      background: ic.bg
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic.name,
    size: 24,
    style: {
      color: ic.color
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--text-base)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--color-ink)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: "var(--text-sm)",
      color: "var(--color-ink-4)"
    }
  }, description), children)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row-reverse",
      gap: 12,
      background: "var(--color-subtle)",
      padding: "12px 24px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onConfirm,
    style: {
      borderRadius: "var(--radius-md)",
      padding: "8px 12px",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-semibold)",
      color: "#fff",
      border: "none",
      boxShadow: "var(--shadow-xs)",
      cursor: "pointer",
      background: CONFIRM_BG[confirmColor] || "#4b5563"
    }
  }, confirmText), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCancel,
    style: {
      borderRadius: "var(--radius-md)",
      padding: "8px 12px",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--color-ink)",
      background: "var(--color-surface)",
      border: "none",
      boxShadow: "var(--shadow-xs), inset 0 0 0 1px var(--color-line-strong)",
      cursor: "pointer"
    }
  }, cancelText))));
}
Object.assign(__ds_scope, { ConfirmModal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ConfirmModal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Drawer.jsx
try { (() => {
/** Right-side slide-over — recreation of utils/BaseDrawer.vue */
function Drawer({
  open = true,
  title = "Panel Title",
  description = "Panel description",
  width = 512,
  onClose,
  children,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 50,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-drawer)",
      backdropFilter: "blur(4px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      width: "100%",
      maxWidth: width,
      display: "flex",
      flexDirection: "column",
      background: "var(--color-surface)",
      boxShadow: "var(--shadow-xl)",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#111827",
      padding: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--text-base)",
      fontWeight: "var(--font-weight-semibold)",
      color: "#fff"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close panel",
    style: {
      background: "none",
      border: "none",
      color: "var(--color-gray)",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x-mark",
    size: 24
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "var(--text-sm)",
      color: "#fff"
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 16
    }
  }, children)));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notification.jsx
try { (() => {
const TONE = {
  success: {
    bg: "#f0fdf4",
    icon: "check-circle",
    iconColor: "#4ade80",
    title: "#166534",
    body: "#15803d"
  },
  error: {
    bg: "#fef2f2",
    icon: "exclamation-triangle",
    iconColor: "#f87171",
    title: "#991b1b",
    body: "#b91c1c"
  },
  warning: {
    bg: "#fefce8",
    icon: "exclamation-triangle",
    iconColor: "#facc15",
    title: "#854d0e",
    body: "#a16207"
  },
  info: {
    bg: "#eff6ff",
    icon: "information-circle",
    iconColor: "#60a5fa",
    title: "#1e40af",
    body: "#1d4ed8"
  }
};

/** Toast / inline alert — recreation of utils/AppNotification.vue */
function Notification({
  type = "success",
  title,
  message,
  onDismiss,
  children,
  style
}) {
  const t = TONE[type] || TONE.success;
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      borderRadius: "var(--radius-md)",
      padding: 16,
      boxShadow: "var(--shadow-lg)",
      background: t.bg,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    variant: "mini",
    size: 20,
    style: {
      color: t.iconColor,
      flexShrink: 0,
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingTop: 2
    }
  }, title ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-medium)",
      color: t.title
    }
  }, title) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: title ? "4px 0 0" : 0,
      fontSize: "var(--text-sm)",
      color: t.body
    }
  }, message), children), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      display: "inline-flex",
      borderRadius: "var(--radius-md)",
      padding: 6,
      margin: -6,
      background: "transparent",
      border: "none",
      color: t.iconColor,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x-mark",
    variant: "mini",
    size: 20
  }))));
}
Object.assign(__ds_scope, { Notification });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notification.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Dark navy tooltip — recreation of utils/Tooltip.vue */
function Tooltip({
  text,
  placement = "top",
  children,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: "100%",
      left: "50%",
      transform: "translate(-50%, -8px)"
    },
    bottom: {
      top: "100%",
      left: "50%",
      transform: "translate(-50%, 8px)"
    },
    left: {
      right: "100%",
      top: "50%",
      transform: "translate(-8px, -50%)"
    },
    right: {
      left: "100%",
      top: "50%",
      transform: "translate(8px, -50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, children, open && text ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 50,
      width: "max-content",
      maxWidth: 320,
      borderRadius: "var(--radius-md)",
      padding: 8,
      textAlign: "center",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      lineHeight: "var(--text-xs--line-height)",
      background: "var(--color-secondary)",
      color: "#fff",
      boxShadow: "var(--shadow-lg)",
      pointerEvents: "none",
      ...pos
    }
  }, text) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square checkbox with dark fill — recreation of ui/BaseCheckbox.vue */
function Checkbox({
  checked = false,
  onChange,
  label,
  id,
  name,
  disabled = false,
  indeterminate = false,
  style,
  ...rest
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-grid",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    name: name,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      appearance: "none",
      margin: 0,
      width: 16,
      height: 16,
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${on ? "var(--color-dark)" : "var(--color-secondary)"}`,
      background: on ? "var(--color-dark)" : "var(--color-subtle)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1
    }
  }, rest)), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      inset: 0,
      width: 14,
      height: 14,
      margin: "auto",
      pointerEvents: "none",
      stroke: "var(--color-gray)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: indeterminate ? "M3 7H11" : "M3 8L6 11L11 3.5",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      opacity: on ? 1 : 0
    }
  }))), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-medium)",
      color: disabled ? "#9ca3af" : "var(--color-primarytext)",
      userSelect: "none",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
const align = a => a === "center" ? "center" : a === "right" ? "right" : "left";

/** Bordered data table — recreation of utils/DataTable.vue */
function DataTable({
  columns = [],
  items = [],
  title,
  searchable = false,
  searchPlaceholder = "Filter by keywords...",
  selectable = false,
  selected = [],
  onSelectedChange,
  rowKey = "id",
  rowClickable = false,
  onRowClick,
  emptyText = "No results found.",
  isLoading = false,
  sortKey = "",
  sortDirection = "asc",
  onSort,
  toolbar,
  toolbarEnd,
  footer,
  renderCell,
  style
}) {
  const [hoverRow, setHoverRow] = React.useState(null);
  const ids = items.map(i => i[rowKey]);
  const allSelected = ids.length > 0 && ids.every(id => selected.includes(id));
  const someSelected = ids.some(id => selected.includes(id));
  const toggleAll = () => onSelectedChange && onSelectedChange(allSelected ? [] : ids);
  const toggleRow = id => onSelectedChange && onSelectedChange(selected.includes(id) ? selected.filter(x => x !== id) : [...selected, id]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--color-stroke)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden"
    }
  }, title || searchable || toolbar || toolbarEnd ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: 8,
      background: "var(--color-surface)"
    }
  }, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-primary)",
      fontSize: "var(--text-base)",
      fontWeight: "var(--font-weight-bold)",
      whiteSpace: "nowrap",
      color: "var(--color-primarytext)"
    }
  }, title) : null, toolbar, searchable ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "magnifying-glass",
    variant: "mini",
    size: 16,
    style: {
      position: "absolute",
      left: 8,
      top: "50%",
      marginTop: -8,
      color: "#9ca3af"
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: searchPlaceholder,
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "6px 8px 6px 30px",
      fontSize: "var(--text-sm)",
      borderRadius: "var(--radius-md)",
      border: "none",
      outline: "1px solid var(--color-line-strong)",
      outlineOffset: -1,
      background: "var(--color-subtle)",
      color: "var(--color-primarytext)"
    }
  })) : null, toolbarEnd) : null, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontVariantNumeric: "tabular-nums"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--color-page)",
      borderTop: "1px solid var(--color-stroke)",
      borderBottom: "1px solid var(--color-stroke)"
    }
  }, selectable ? /*#__PURE__*/React.createElement("th", {
    style: {
      width: 32,
      padding: "6px 8px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: allSelected,
    indeterminate: someSelected && !allSelected,
    onChange: toggleAll
  })) : null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      padding: "6px 8px",
      textAlign: align(c.align),
      whiteSpace: "nowrap",
      fontSize: "var(--text-xs)",
      lineHeight: "var(--text-xs--line-height)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-secondarytext)"
    }
  }, c.sortable ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onSort && onSort(c.key),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: "none",
      border: "none",
      padding: "2px 4px",
      margin: "0 -4px",
      font: "inherit",
      color: "inherit",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", null, c.label), sortKey === c.key ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: sortDirection === "asc" ? "chevron-up" : "chevron-down",
    variant: "mini",
    size: 14,
    style: {
      color: "var(--color-primary)"
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-up-down",
    variant: "mini",
    size: 14,
    style: {
      color: "#9ca3af"
    }
  })) : c.label)))), /*#__PURE__*/React.createElement("tbody", null, isLoading ? [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      background: "var(--color-surface)",
      borderBottom: "1px solid var(--color-stroke)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length + (selectable ? 1 : 0),
    style: {
      padding: "16px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16,
      borderRadius: 4,
      background: "var(--color-soft-2)",
      animation: "lbx-pulse 1.6s ease-in-out infinite"
    }
  })))) : items.length ? items.map(item => {
    const id = item[rowKey];
    const isSel = selected.includes(id);
    return /*#__PURE__*/React.createElement("tr", {
      key: id,
      onClick: () => rowClickable && onRowClick && onRowClick(item),
      onMouseEnter: () => setHoverRow(id),
      onMouseLeave: () => setHoverRow(null),
      style: {
        background: hoverRow === id || isSel ? "var(--color-soft)" : "var(--color-surface)",
        borderBottom: "1px solid var(--color-stroke)",
        fontFamily: "var(--font-primary)",
        fontSize: "var(--text-xs)",
        lineHeight: "var(--text-xs--line-height)",
        color: "var(--color-ink-brand)",
        cursor: rowClickable ? "pointer" : "default"
      }
    }, selectable ? /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "8px",
        position: "relative"
      },
      onClick: e => {
        e.stopPropagation();
        toggleRow(id);
      }
    }, isSel ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 2,
        background: "var(--color-dark)"
      }
    }) : null, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
      checked: isSel
    })) : null, columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        padding: "8px",
        textAlign: align(c.align)
      }
    }, renderCell ? renderCell(c, item) : typeof item[c.key] === "object" ? null : item[c.key])));
  }) : /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--color-surface)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length + (selectable ? 1 : 0),
    style: {
      padding: "32px 8px",
      textAlign: "center",
      fontSize: "var(--text-xs)",
      color: "var(--color-ink-4)"
    }
  }, emptyText))))), footer);
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text / number / textarea field — recreation of ui/BaseInput.vue */
function Input({
  label,
  value,
  onChange,
  name,
  id,
  type = "text",
  placeholder,
  error,
  helper,
  icon,
  disabled = false,
  success = false,
  clearable = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const outline = error ? "var(--color-red)" : success ? "var(--color-green)" : "var(--color-line-strong)";
  const focusOutline = error ? "var(--color-red-light-3)" : success ? "var(--color-green-light-3)" : "#a5b4fc";
  const field = {
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "var(--radius-md)",
    padding: type === "textArea" ? "8px" : icon ? "8px 8px 8px 32px" : "8px",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    lineHeight: "1.5rem",
    background: disabled ? "var(--color-soft-2)" : "var(--color-subtle)",
    color: disabled ? "#9ca3af" : error ? "#7f1d1d" : "var(--color-primarytext)",
    outline: focus ? `2px solid ${focusOutline}` : `1px solid ${outline}`,
    outlineOffset: focus ? "-2px" : "-1px",
    border: "none",
    cursor: disabled ? "not-allowed" : "text",
    minHeight: type === "textArea" ? 80 : undefined,
    resize: type === "textArea" ? "vertical" : undefined
  };
  const Field = type === "textArea" ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "block",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-medium)",
      color: disabled ? "#9ca3af" : "var(--color-primarytext)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginTop: label ? 8 : 0,
      display: "grid"
    }
  }, icon && type !== "textArea" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    style: {
      position: "absolute",
      left: 10,
      top: "50%",
      marginTop: -8,
      color: error ? "#f87171" : "#9ca3af",
      pointerEvents: "none",
      zIndex: 1
    }
  }) : null, /*#__PURE__*/React.createElement(Field, _extends({
    id: id,
    name: name,
    type: type === "textArea" ? undefined : type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    "aria-invalid": !!error,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }, rest)), error ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "exclamation-circle",
    size: 20,
    style: {
      position: "absolute",
      right: 10,
      top: "50%",
      marginTop: -10,
      color: "var(--color-red)",
      pointerEvents: "none"
    }
  }) : null, success && !error ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 20,
    style: {
      position: "absolute",
      right: 10,
      top: "50%",
      marginTop: -10,
      color: "var(--color-green)",
      pointerEvents: "none"
    }
  }) : null, clearable && !error && !success ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x-circle",
    size: 20,
    style: {
      position: "absolute",
      right: 10,
      top: "50%",
      marginTop: -10,
      color: "#9ca3af"
    }
  }) : null), error ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: "var(--text-xs)",
      color: "var(--color-red)"
    }
  }, error) : helper ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: "var(--text-xs)",
      color: "var(--color-ink-4)"
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select with chevron — recreation of ui/BaseSelect.vue */
function Select({
  label,
  value,
  onChange,
  name,
  id,
  options = [],
  valueKey = "value",
  labelKey = "label",
  placeholder = "Select an option",
  error,
  disabled = false,
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "block",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-ink)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-red)"
    }
  }, "*") : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginTop: label ? 8 : 0
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    name: name,
    value: value ?? "",
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      appearance: "none",
      padding: "8px 28px 8px 8px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: "1.5rem",
      borderRadius: "var(--radius-md)",
      border: "none",
      background: disabled ? "var(--color-soft)" : "var(--color-subtle)",
      color: disabled ? "#9ca3af" : "var(--color-ink-brand)",
      outline: focus ? "2px solid var(--color-new-outline)" : `1px solid ${error ? "var(--color-red)" : "var(--color-line-strong)"}`,
      outlineOffset: focus ? "-2px" : "-1px",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder) : null, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o[valueKey],
    value: o[valueKey]
  }, o[labelKey]))), !disabled ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    variant: "mini",
    size: 16,
    style: {
      position: "absolute",
      right: 8,
      top: "50%",
      marginTop: -8,
      color: "var(--color-ink-4)",
      pointerEvents: "none"
    }
  }) : null), error ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "var(--text-xs)",
      color: "var(--color-red)"
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/ToggleSwitch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill toggle — recreation of utils/GenericToggleSwitch.vue */
function ToggleSwitch({
  checked = false,
  onChange,
  disabled = false,
  ariaLabel = "Toggle status",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: 24,
      width: 44,
      flexShrink: 0,
      borderRadius: "var(--radius-full)",
      border: "2px solid transparent",
      background: "var(--color-stroke)",
      padding: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background-color var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 20,
      width: 20,
      borderRadius: "var(--radius-full)",
      boxShadow: "var(--shadow-sm)",
      background: checked ? "var(--color-primary)" : "var(--color-surface)",
      transform: `translateX(${checked ? 20 : 0}px)`,
      transition: "transform var(--duration-base) var(--ease-standard), background-color var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 12 12",
    width: "12",
    height: "12",
    fill: checked ? "#fff" : "none",
    stroke: checked ? "none" : "#9ca3af"
  }, checked ? /*#__PURE__*/React.createElement("path", {
    d: "M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
Object.assign(__ds_scope, { ToggleSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ToggleSwitch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SubTabs.jsx
try { (() => {
/** Folder-style sub-tabs — recreation of utils/LbxSubTabs.vue */
function SubTabs({
  tabs = [],
  value,
  onChange,
  padding = "8px 16px",
  style
}) {
  const [hover, setHover] = React.useState(null);
  const refs = React.useRef({});
  const [ind, setInd] = React.useState({
    width: 0,
    offset: 0
  });
  React.useEffect(() => {
    const el = refs.current[value];
    if (el) setInd({
      width: el.getBoundingClientRect().width,
      offset: el.offsetLeft
    });
  }, [value, tabs.length]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Subtabs",
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--color-line)"
    }
  }, tabs.map(t => {
    const active = value === t.key;
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      type: "button",
      ref: el => {
        if (el) refs.current[t.key] = el;
      },
      onClick: () => onChange && onChange(t.key),
      onMouseEnter: () => setHover(t.key),
      onMouseLeave: () => setHover(null),
      "aria-current": active ? "page" : undefined,
      style: {
        marginBottom: -1,
        padding,
        borderRadius: "var(--radius-md) var(--radius-md) 0 0",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--font-weight-medium)",
        cursor: "pointer",
        border: active ? "1px solid var(--color-line)" : "1px solid transparent",
        borderBottomColor: active ? "transparent" : "transparent",
        background: active ? "var(--color-surface)" : hover === t.key ? "var(--color-subtle)" : "transparent",
        color: active ? "var(--color-ink)" : "var(--color-primary)",
        transition: "background-color var(--duration-base) var(--ease-standard)"
      }
    }, t.label ?? t.key);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      height: 2,
      borderRadius: "var(--radius-full)",
      background: "var(--color-primary)",
      width: ind.width,
      transform: `translateX(${ind.offset}px)`,
      transition: "all var(--duration-slow) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { SubTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SubTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underlined tab row with sliding indicator — recreation of utils/LbxTabs.vue */
function Tabs({
  tabs = [],
  value,
  onChange,
  underlinePosition = "bottom",
  style
}) {
  const [hover, setHover] = React.useState(null);
  const names = tabs.map(t => typeof t === "string" ? t : t.name);
  const refs = React.useRef({});
  const [ind, setInd] = React.useState({
    width: 0,
    offset: 0
  });
  React.useEffect(() => {
    const el = refs.current[value];
    if (el) setInd({
      width: el.getBoundingClientRect().width,
      offset: el.offsetLeft
    });
  }, [value, tabs.length]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: -2,
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      [underlinePosition === "top" ? "top" : "bottom"]: 0,
      height: 2,
      background: "var(--color-primary)",
      width: ind.width,
      transform: `translateX(${ind.offset}px)`,
      transition: "all var(--duration-base) var(--ease-standard)"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Tabs",
    style: {
      display: "flex"
    }
  }, names.map(n => {
    const active = value === n;
    return /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      ref: el => {
        if (el) refs.current[n] = el;
      },
      onClick: e => {
        e.preventDefault();
        onChange && onChange(n);
      },
      onMouseEnter: () => setHover(n),
      onMouseLeave: () => setHover(null),
      "aria-current": active ? "page" : undefined,
      style: {
        padding: "12px",
        whiteSpace: "nowrap",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--font-weight-medium)",
        textDecoration: "none",
        cursor: "pointer",
        borderBottom: underlinePosition === "bottom" ? "2px solid transparent" : undefined,
        borderTop: underlinePosition === "top" ? "2px solid transparent" : undefined,
        background: active || hover === n ? "var(--color-stroke)" : "transparent",
        color: active ? "var(--color-primarytext)" : hover === n ? "var(--color-primary)" : "var(--color-secondarytext)",
        transition: "all var(--duration-base) var(--ease-standard)"
      }
    }, n);
  }))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/shell/AppSidebar.jsx
try { (() => {
/**
 * Dark app sidebar — the nav rail from layouts/Authenticated.vue +
 * components/PrimaryNavigation.vue: app label at top, bold nav items,
 * expandable children, Settings pinned to the bottom.
 */
function AppSidebar({
  appLabel = "Lena",
  appIconSrc,
  items = [],
  activeName,
  onNavigate,
  collapsed = false,
  onToggleCollapse,
  showSettings = true,
  style
}) {
  const [hover, setHover] = React.useState(null);
  const [expanded, setExpanded] = React.useState(() => Object.fromEntries(items.filter(i => i.children).map(i => [i.name, true])));
  const width = collapsed ? "var(--sidebar-width-collapsed)" : "var(--sidebar-width)";
  const itemStyle = (active, key) => ({
    display: "flex",
    alignItems: "center",
    gap: 12,
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "var(--radius-md)",
    padding: "8px 12px",
    textAlign: "left",
    fontFamily: "var(--font-primary)",
    fontSize: "var(--text-sm)",
    lineHeight: "1.5rem",
    fontWeight: "var(--font-weight-bold)",
    whiteSpace: "nowrap",
    border: "none",
    cursor: "pointer",
    background: active ? "rgba(255,255,255,0.1)" : hover === key ? "rgba(255,255,255,0.1)" : "transparent",
    color: active || hover === key ? "#fff" : "var(--color-dark-6)",
    transition: "all var(--duration-base) var(--ease-standard)"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      width,
      flexShrink: 0,
      background: "var(--color-dark)",
      borderRight: "1px solid var(--color-line)",
      padding: "0 16px 16px",
      color: "#fff",
      overflow: "hidden",
      transition: "width var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "var(--topbar-height)",
      flexShrink: 0,
      alignItems: "center",
      justifyContent: collapsed ? "center" : "space-between",
      gap: 12
    }
  }, collapsed ? /*#__PURE__*/React.createElement(__ds_scope.Tooltip, {
    text: "Expand",
    placement: "right"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggleCollapse,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 32,
      height: 32,
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: appIconSrc || "assets/leadbox-isotipo.svg",
    alt: "Leadbox",
    style: {
      width: 24,
      height: 24
    }
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Open apps selector",
    style: {
      display: "inline-flex",
      padding: 4,
      borderRadius: 4,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bars-2",
    size: 24
  })), appIconSrc ? /*#__PURE__*/React.createElement("img", {
    src: appIconSrc,
    alt: "",
    style: {
      width: 24,
      height: 24,
      color: "#fff"
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-2xl)",
      fontWeight: "var(--font-weight-semibold)"
    }
  }, appLabel)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggleCollapse,
    "aria-label": "Collapse sidebar",
    style: {
      background: "none",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-double-left",
    variant: "mini",
    size: 20
  })))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flex: 1,
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, items.map(item => {
    const active = activeName === item.name || (item.children || []).some(c => c.name === activeName);
    return /*#__PURE__*/React.createElement("li", {
      key: item.name
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onMouseEnter: () => setHover(item.name),
      onMouseLeave: () => setHover(null),
      onClick: () => item.children ? setExpanded(e => ({
        ...e,
        [item.name]: !e[item.name]
      })) : onNavigate && onNavigate(item.name),
      style: itemStyle(active, item.name)
    }, item.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon,
      size: 24
    }) : null, !collapsed ? /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, item.label) : null, !collapsed && item.badge ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 20,
        height: 20,
        padding: "0 6px",
        borderRadius: "var(--radius-full)",
        background: "#ef4444",
        color: "#fff",
        fontSize: "var(--text-xs)",
        fontWeight: "var(--font-weight-semibold)"
      }
    }, item.badge) : null, !collapsed && item.children ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      variant: "mini",
      size: 16,
      style: {
        transform: expanded[item.name] ? "rotate(180deg)" : "none",
        transition: "transform var(--duration-base)"
      }
    }) : null), !collapsed && item.children && expanded[item.name] ? /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0
      }
    }, item.children.map(c => /*#__PURE__*/React.createElement("li", {
      key: c.name
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onMouseEnter: () => setHover(c.name),
      onMouseLeave: () => setHover(null),
      onClick: () => onNavigate && onNavigate(c.name),
      style: {
        ...itemStyle(activeName === c.name, c.name),
        padding: "6px 12px 6px 48px",
        fontWeight: "var(--font-weight-medium)",
        background: activeName === c.name ? "rgba(255,255,255,0.05)" : hover === c.name ? "rgba(255,255,255,0.1)" : "transparent"
      }
    }, c.label)))) : null);
  })), showSettings ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("hr", {
    style: {
      border: "none",
      borderTop: "1px solid var(--color-dark-6)",
      margin: "16px 0"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onMouseEnter: () => setHover("__settings"),
    onMouseLeave: () => setHover(null),
    onClick: () => onNavigate && onNavigate("settings"),
    style: itemStyle(activeName === "settings", "__settings")
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "cog-6-tooth",
    size: 24
  }), !collapsed ? /*#__PURE__*/React.createElement("span", null, "Settings") : null)) : null));
}
Object.assign(__ds_scope, { AppSidebar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shell/AppSidebar.jsx", error: String((e && e.message) || e) }); }

// components/shell/Topbar.jsx
try { (() => {
/**
 * Sticky app topbar — recreation of the header in layouts/Authenticated.vue:
 * search with ⌘K hint, notifications, help, location selector, user chip.
 */
function Topbar({
  searchPlaceholder = "Search...",
  locationLabel = "All locations",
  userName = "Ryan A.",
  onSearchClick,
  style
}) {
  const [hover, setHover] = React.useState(null);
  const iconBtn = key => ({
    display: "inline-flex",
    padding: 10,
    margin: -10,
    background: "none",
    border: "none",
    cursor: "pointer",
    color: hover === key ? "var(--color-ink-4)" : "#9ca3af"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "var(--topbar-height)",
      flexShrink: 0,
      alignItems: "center",
      gap: 24,
      borderBottom: "1px solid var(--color-line)",
      background: "var(--color-surface)",
      padding: "0 16px",
      boxShadow: "var(--shadow-xs)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSearchClick,
    style: {
      display: "flex",
      flex: 1,
      minWidth: 0,
      alignItems: "center",
      gap: 8,
      height: "100%",
      background: "var(--color-surface)",
      border: "none",
      padding: 0,
      textAlign: "left",
      cursor: "pointer",
      color: "#9ca3af",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "magnifying-glass",
    variant: "mini",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, searchPlaceholder), /*#__PURE__*/React.createElement("kbd", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "2px 6px",
      fontSize: "var(--text-xs)",
      fontFamily: "var(--font-mono)",
      background: "var(--color-soft)",
      border: "1px solid var(--color-line)",
      borderRadius: 4
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexShrink: 0,
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tooltip, {
    text: "View notifications",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onMouseEnter: () => setHover("bell"),
    onMouseLeave: () => setHover(null),
    style: iconBtn("bell")
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "bell",
    size: 24
  }))), /*#__PURE__*/React.createElement(__ds_scope.Tooltip, {
    text: "Help & Documentation",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onMouseEnter: () => setHover("help"),
    onMouseLeave: () => setHover(null),
    style: iconBtn("help")
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "question-mark-circle",
    size: 24
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 24,
      background: "rgba(17,24,39,0.1)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--color-ink)",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "building-storefront",
    size: 20,
    style: {
      color: "var(--color-ink-4)"
    }
  }), /*#__PURE__*/React.createElement("span", null, locationLabel), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    variant: "mini",
    size: 20,
    style: {
      color: "#9ca3af"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 24,
      background: "rgba(17,24,39,0.1)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      display: "inline-flex",
      alignItems: "center",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 6,
      margin: -6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: userName,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 16,
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--color-ink)"
    }
  }, userName), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    variant: "mini",
    size: 20,
    style: {
      marginLeft: 8,
      color: "#9ca3af"
    }
  }))));
}
Object.assign(__ds_scope, { Topbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shell/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/leadbox_os/AppFrame.jsx
try { (() => {
const {
  AppSidebar,
  Topbar
} = window.LeadboxDesignSystem_3e2c7f;
const APPS = {
  lena: {
    label: "Lena",
    icon: "../../assets/app-icon-lena.svg",
    search: "Search calls, customers...",
    items: [{
      name: "lena-dashboard",
      label: "Dashboard",
      icon: "chart-pie"
    }, {
      name: "lena-calls",
      label: "Calls",
      icon: "phone"
    }, {
      name: "lena-missed",
      label: "Missed Calls",
      icon: "phone-x-mark",
      badge: 12
    }, {
      name: "lena-reports",
      label: "Reports",
      icon: "document-chart-bar",
      children: [{
        name: "lena-scores",
        label: "CLEAR Scores"
      }, {
        name: "lena-heatmap",
        label: "Heat Map"
      }]
    }]
  },
  crm: {
    label: "CRM",
    icon: null,
    search: "Search customers, leads...",
    items: [{
      name: "crm-dashboard",
      label: "Dashboard",
      icon: "chart-pie"
    }, {
      name: "crm-customers",
      label: "Customers",
      icon: "user-group"
    }, {
      name: "crm-conversations",
      label: "Conversations",
      icon: "rectangle-stack"
    }, {
      name: "crm-inbox",
      label: "Inbox",
      icon: "inbox",
      badge: 4
    }]
  },
  ims: {
    label: "IMS",
    icon: "../../assets/app-icon-ims.svg",
    search: "Search vehicles, inventory...",
    items: [{
      name: "ims-dashboard",
      label: "Dashboard",
      icon: "chart-pie"
    }, {
      name: "ims-inventory",
      label: "Inventory",
      icon: "truck"
    }, {
      name: "ims-reports",
      label: "Reports",
      icon: "document-chart-bar"
    }]
  }
};

/** App shell wrapper: dark rail + sticky topbar + page area on --color-page. */
function AppFrame({
  app,
  activeName,
  onNavigate,
  location = "Northside Toyota",
  children
}) {
  const [collapsed, setCollapsed] = React.useState(false);
  const cfg = APPS[app];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      minHeight: 0,
      background: "var(--color-page)"
    }
  }, /*#__PURE__*/React.createElement(AppSidebar, {
    appLabel: cfg.label,
    appIconSrc: cfg.icon,
    items: cfg.items,
    activeName: activeName,
    onNavigate: onNavigate,
    collapsed: collapsed,
    onToggleCollapse: () => setCollapsed(!collapsed)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    searchPlaceholder: cfg.search,
    locationLabel: location,
    userName: "Ryan A."
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: "auto",
      background: "var(--color-page)"
    }
  }, children)));
}

/** Page header block: white strip with a 30px semibold title (+ optional tabs / actions). */
function PageHeader({
  title,
  subtitle,
  tabs,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "space-between",
      gap: 16,
      background: "var(--color-surface)",
      boxShadow: "var(--shadow-md)",
      padding: "16px 16px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 16px",
      fontSize: "var(--text-3xl)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--color-ink)"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "-8px 0 16px",
      fontSize: "var(--text-sm)",
      color: "var(--color-ink-4)"
    }
  }, subtitle) : null, tabs), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 8,
      paddingBottom: 16
    }
  }, actions) : null);
}

/** White card with the standard 1px --color-stroke border. */
function Panel({
  children,
  style,
  padding = 24
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--color-line-soft)",
      boxShadow: "var(--shadow-sm)",
      padding,
      ...style
    }
  }, children);
}
Object.assign(window, {
  AppFrame,
  PageHeader,
  Panel,
  APPS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/leadbox_os/AppFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/leadbox_os/CrmDashboard.jsx
try { (() => {
const {
  Icon,
  TagBadge,
  Avatar
} = window.LeadboxDesignSystem_3e2c7f;
const fmt = v => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
}).format(v);
const PIPELINE = [{
  stage: "new",
  label: "New",
  count: 34,
  value: 1180000,
  color: "#fcd34d"
}, {
  stage: "connected",
  label: "Connected",
  count: 26,
  value: 902000,
  color: "#fbbf24"
}, {
  stage: "appointment",
  label: "Appointment",
  count: 18,
  value: 655000,
  color: "#f59e0b"
}, {
  stage: "numbers_presented",
  label: "Numbers",
  count: 11,
  value: 402000,
  color: "#bef264"
}];
const FUNNEL = [{
  stage: "New",
  count: 34,
  color: "#fcd34d"
}, {
  stage: "Connected",
  count: 26,
  color: "#fbbf24"
}, {
  stage: "Appointment",
  count: 18,
  color: "#bef264"
}, {
  stage: "Numbers",
  count: 11,
  color: "#a3e635"
}, {
  stage: "Sold",
  count: 7,
  color: "#22c55e"
}, {
  stage: "Delivered",
  count: 5,
  color: "#15803d"
}];
const RECENT = [{
  id: 1,
  name: "Alicia Trent",
  stage: "appointment",
  stageLabel: "Appointment",
  vehicle: "2024 RAV4 XLE",
  value: 34995
}, {
  id: 2,
  name: "Dev Patel",
  stage: "new",
  stageLabel: "New",
  vehicle: "2023 Corolla LE",
  value: 24100
}, {
  id: 3,
  name: "Monique Farrow",
  stage: "sold",
  stageLabel: "Sold",
  vehicle: "2022 Highlander",
  value: 41800
}, {
  id: 4,
  name: "Grant Oyelaran",
  stage: "connected",
  stageLabel: "Connected",
  vehicle: "2024 Tacoma TRD",
  value: 52300
}, {
  id: 5,
  name: "Beth Kowalczyk",
  stage: "lost",
  stageLabel: "Lost",
  vehicle: "2021 Camry SE",
  value: 21400
}];
const STAGE_BADGE = {
  new: {
    bg: "#fef3c7",
    fg: "#92400e"
  },
  connected: {
    bg: "#fde68a",
    fg: "#92400e"
  },
  appointment: {
    bg: "#fcd34d",
    fg: "#92400e"
  },
  numbers_presented: {
    bg: "#d9f99d",
    fg: "#3f6212"
  },
  sold: {
    bg: "#22c55e",
    fg: "#fff"
  },
  delivered: {
    bg: "#15803d",
    fg: "#fff"
  },
  lost: {
    bg: "#fee2e2",
    fg: "#991b1b"
  }
};
const ACTIVITY = [{
  who: "Dana Whitfield",
  what: "logged a call with Alicia Trent",
  when: "12m ago"
}, {
  who: "Marcus Ilunga",
  what: "moved Dev Patel to Connected",
  when: "48m ago"
}, {
  who: "System",
  what: "created a conversation from an inbound call",
  when: "1h ago"
}, {
  who: "Priya Raman",
  what: "sent an SMS to Grant Oyelaran",
  when: "2h ago"
}];

/** CRM → Dashboard. Mirrors views/Crm/CRMDashboardView.vue */
function CrmDashboard() {
  const maxStage = Math.max(...PIPELINE.map(s => s.count));
  const maxFunnel = Math.max(...FUNNEL.map(s => s.count));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: "var(--text-2xl)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--color-ink)"
    }
  }, "CRM Dashboard"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "var(--text-sm)",
      color: "var(--color-ink-4)"
    }
  }, "Overview of your customers, conversations, and activities.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "New Conversations",
    value: "34",
    valueColor: "#d97706",
    icon: "sparkles",
    iconBg: "#fef3c7",
    iconColor: "#d97706",
    foot: "Awaiting first contact"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Open Conversations",
    value: "89",
    icon: "rectangle-stack",
    iconBg: "#f3e8ff",
    iconColor: "#9333ea",
    foot: `${fmt(3139000)} pipeline value`
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Sold This Month",
    value: "7",
    valueColor: "#16a34a",
    icon: "trophy",
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    foot: `${fmt(281400)} revenue`
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Total Customers",
    value: "2,417",
    icon: "user-group",
    iconBg: "#dbeafe",
    iconColor: "#2563eb",
    foot: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#16a34a",
        fontWeight: "var(--font-weight-medium)"
      }
    }, "+64"), " this month")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--text-lg)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-ink)"
    }
  }, "Pipeline Overview"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--color-primary)",
      textDecoration: "none"
    }
  }, "View all conversations \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, PIPELINE.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.stage,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 96,
      fontSize: "var(--text-sm)",
      color: "var(--color-ink-3)"
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 16,
      background: "var(--color-soft)",
      borderRadius: "var(--radius-full)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${s.count / maxStage * 100}%`,
      background: s.color,
      borderRadius: "var(--radius-full)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      textAlign: "right",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-ink)",
      fontVariantNumeric: "tabular-nums"
    }
  }, s.count)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 96,
      textAlign: "right",
      fontSize: "var(--text-sm)",
      color: "var(--color-ink-4)",
      fontVariantNumeric: "tabular-nums"
    }
  }, fmt(s.value)))))), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--text-lg)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-ink)"
    }
  }, "Conversion Funnel"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-medium)",
      color: "#16a34a"
    }
  }, "14.7% conversion rate")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, FUNNEL.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.stage,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 96,
      fontSize: "var(--text-sm)",
      color: "var(--color-ink-3)"
    }
  }, f.stage), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32,
      borderRadius: 4,
      background: f.color,
      width: `${Math.max(f.count / maxFunnel * 100, 10)}%`,
      minWidth: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-medium)",
      color: "#fff"
    }
  }, f.count)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 16px",
      fontSize: "var(--text-lg)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-ink)"
    }
  }, "Quick Actions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(QuickAction, {
    icon: "user-plus",
    iconBg: "#dbeafe",
    iconColor: "#2563eb",
    label: "Add Customer"
  }), /*#__PURE__*/React.createElement(QuickAction, {
    icon: "plus-circle",
    iconBg: "#f3e8ff",
    iconColor: "#9333ea",
    label: "Create Conversation"
  }), /*#__PURE__*/React.createElement(QuickAction, {
    icon: "cog-6-tooth",
    iconBg: "var(--color-soft)",
    iconColor: "var(--color-ink-3)",
    label: "CRM Settings"
  }))), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 16px",
      fontSize: "var(--text-lg)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-ink)"
    }
  }, "Recent Activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, ACTIVITY.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 8,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: a.who,
    size: "xs"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-xs)",
      color: "var(--color-ink-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--font-weight-semibold)"
    }
  }, a.who), " ", a.what), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-xs)",
      color: "var(--color-ink-4)"
    }
  }, a.when)))))), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 16px",
      fontSize: "var(--text-lg)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-ink)"
    }
  }, "Recent Conversations"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, RECENT.map(d => {
    const b = STAGE_BADGE[d.stage];
    return /*#__PURE__*/React.createElement("a", {
      key: d.id,
      href: "#",
      style: {
        display: "block",
        padding: 12,
        borderRadius: "var(--radius-lg)",
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: "var(--text-sm)",
        fontWeight: "var(--font-weight-medium)",
        color: "var(--color-ink)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, d.name), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        borderRadius: 4,
        padding: "2px 6px",
        fontSize: "var(--text-xs)",
        fontWeight: "var(--font-weight-medium)",
        background: b.bg,
        color: b.fg
      }
    }, d.stageLabel)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--color-ink-4)"
      }
    }, d.vehicle), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        fontWeight: "var(--font-weight-medium)",
        color: "var(--color-ink)",
        fontVariantNumeric: "tabular-nums"
      }
    }, fmt(d.value))));
  }))))));
}
function MetricCard({
  label,
  value,
  valueColor,
  icon,
  iconBg,
  iconColor,
  foot
}) {
  return /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-ink-4)"
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: "var(--text-3xl)",
      fontWeight: "var(--font-weight-semibold)",
      color: valueColor || "var(--color-ink)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-full)",
      background: iconBg,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24,
    style: {
      color: iconColor
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: "var(--text-xs)",
      color: "var(--color-ink-4)"
    }
  }, foot));
}
function QuickAction({
  icon,
  iconBg,
  iconColor,
  label
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 12,
      borderRadius: "var(--radius-lg)",
      textDecoration: "none",
      background: h ? "var(--color-subtle)" : "transparent"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      borderRadius: "var(--radius-full)",
      background: iconBg,
      padding: 8,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    style: {
      color: iconColor
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-ink)"
    }
  }, label));
}
Object.assign(window, {
  CrmDashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/leadbox_os/CrmDashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/leadbox_os/ImsInventory.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  DataTable,
  Pagination,
  TagBadge,
  Button,
  Tabs,
  Icon,
  Drawer,
  Input,
  Select,
  ConfirmModal,
  Notification
} = window.LeadboxDesignSystem_3e2c7f;
const VEHICLES = [{
  id: 1,
  stock: "LB-40182",
  vin: "4T3ZA3BB1PU019284",
  vehicle: "2024 Toyota RAV4 XLE AWD",
  type: "New",
  days: 12,
  price: "$34,995",
  photos: 41,
  status: "Live"
}, {
  id: 2,
  stock: "LB-40219",
  vin: "1FTFW1E84PFB33210",
  vehicle: "2023 Ford F-150 Lariat SuperCrew",
  type: "Used",
  days: 96,
  price: "$58,400",
  photos: 28,
  status: "Aging"
}, {
  id: 3,
  stock: "LB-40245",
  vin: "2HGFE2F52NH512877",
  vehicle: "2022 Honda Civic Sport Sedan",
  type: "Used",
  days: 34,
  price: "$26,150",
  photos: 33,
  status: "Live"
}, {
  id: 4,
  stock: "LB-40260",
  vin: "5TDKDRAH8PS004512",
  vehicle: "2024 Toyota Highlander Limited",
  type: "New",
  days: 4,
  price: "$52,780",
  photos: 0,
  status: "No photos"
}, {
  id: 5,
  stock: "LB-40277",
  vin: "1GCUYDED4NZ118904",
  vehicle: "2022 Chevrolet Silverado 1500 LT",
  type: "Used",
  days: 61,
  price: "$47,900",
  photos: 22,
  status: "Live"
}, {
  id: 6,
  stock: "LB-40281",
  vin: "3MW5R1J09N8C41220",
  vehicle: "2022 BMW 330i xDrive",
  type: "Used",
  days: 18,
  price: "$44,300",
  photos: 36,
  status: "Live"
}, {
  id: 7,
  stock: "LB-40294",
  vin: "JTMRWRFV0ND551082",
  vehicle: "2023 Toyota RAV4 Hybrid LE",
  type: "Used",
  days: 143,
  price: "$38,650",
  photos: 19,
  status: "Aging"
}];
const STATUS_TONE = {
  Live: "success",
  Aging: "warning",
  "No photos": "danger"
};

/** IMS → Inventory. Mirrors views/InventoryView.vue + InventoryView/VehiclesList.vue */
function ImsInventory() {
  const [tab, setTab] = React.useState("Vehicles");
  const [sel, setSel] = React.useState([]);
  const [drawer, setDrawer] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [sortKey, setSortKey] = React.useState("days");
  const [sortDir, setSortDir] = React.useState("desc");
  const rows = React.useMemo(() => {
    const r = [...VEHICLES];
    r.sort((a, b) => {
      const va = a[sortKey],
        vb = b[sortKey];
      const cmp = typeof va === "number" ? va - vb : String(va).localeCompare(String(vb));
      return sortDir === "asc" ? cmp : -cmp;
    });
    return r;
  }, [sortKey, sortDir]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Inventory",
    tabs: /*#__PURE__*/React.createElement(Tabs, {
      tabs: ["Vehicles", "Rebates"],
      value: tab,
      onChange: setTab
    }),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setDrawer(true)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-tray",
      size: 16
    }), "Import Vehicles"), /*#__PURE__*/React.createElement(Button, null, /*#__PURE__*/React.createElement(Icon, {
      name: "plus-circle",
      size: 20
    }), "Add Vehicle"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, tab === "Vehicles" ? /*#__PURE__*/React.createElement(DataTable, {
    searchable: true,
    searchPlaceholder: "Filter by stock #, VIN, year, make, model...",
    selectable: true,
    selected: sel,
    onSelectedChange: setSel,
    rowClickable: true,
    sortKey: sortKey,
    sortDirection: sortDir,
    onSort: k => {
      if (k === sortKey) setSortDir(sortDir === "asc" ? "desc" : "asc");else {
        setSortKey(k);
        setSortDir("asc");
      }
    },
    toolbarEnd: sel.length ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginLeft: "auto"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        fontWeight: "var(--font-weight-bold)",
        color: "var(--color-secondarytext)"
      }
    }, sel.length, " selected"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary"
    }, "Add tags"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      tone: "danger",
      onClick: () => setConfirming(true)
    }, "Delete")) : null,
    columns: [{
      key: "stock",
      label: "Stock #",
      sortable: true
    }, {
      key: "vehicle",
      label: "Vehicle",
      sortable: true
    }, {
      key: "type",
      label: "Type",
      align: "center"
    }, {
      key: "days",
      label: "Days",
      align: "right",
      sortable: true
    }, {
      key: "price",
      label: "Price",
      align: "right",
      sortable: true
    }, {
      key: "photos",
      label: "Photos",
      align: "right"
    }, {
      key: "status",
      label: "Status",
      align: "center"
    }],
    items: rows,
    renderCell: (c, r) => {
      if (c.key === "status") return /*#__PURE__*/React.createElement(TagBadge, {
        type: STATUS_TONE[r.status]
      }, r.status);
      if (c.key === "type") return /*#__PURE__*/React.createElement(TagBadge, {
        type: r.type === "New" ? "primary" : "gray"
      }, r.type);
      if (c.key === "vehicle") return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: "var(--font-weight-medium)"
        }
      }, r.vehicle), /*#__PURE__*/React.createElement("div", {
        style: {
          color: "var(--color-ink-4)"
        }
      }, r.vin));
      if (c.key === "photos") return /*#__PURE__*/React.createElement("span", {
        style: {
          color: r.photos === 0 ? "var(--color-red)" : "inherit"
        }
      }, r.photos);
      return r[c.key];
    },
    footer: /*#__PURE__*/React.createElement(Pagination, {
      total: 412,
      page: 1,
      perPage: 25
    })
  }) : /*#__PURE__*/React.createElement(DataTable, {
    searchable: true,
    title: "Rebates",
    columns: [{
      key: "name",
      label: "Rebate"
    }, {
      key: "amount",
      label: "Amount",
      align: "right"
    }, {
      key: "expires",
      label: "Expires",
      align: "right"
    }],
    items: [{
      id: 1,
      name: "Toyota July Cash Back",
      amount: "$1,500",
      expires: "Jul 31, 2026"
    }, {
      id: 2,
      name: "Loyalty Bonus — Returning Owner",
      amount: "$750",
      expires: "Aug 15, 2026"
    }],
    footer: /*#__PURE__*/React.createElement(Pagination, {
      total: 2,
      page: 1,
      perPage: 25
    })
  })), drawer ? /*#__PURE__*/React.createElement(Drawer, {
    title: "Import Vehicles",
    description: "Upload files to import new vehicle data.",
    onClose: () => setDrawer(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Source",
    name: "source",
    value: "homenet",
    options: [{
      value: "homenet",
      label: "HomeNet"
    }, {
      value: "autotrader",
      label: "AutoTrader"
    }, {
      value: "boost",
      label: "Boost"
    }]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Feed file",
    placeholder: "Choose a file..."
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Notes",
    type: "textArea",
    placeholder: "Anything the next person should know about this import..."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => {
      setDrawer(false);
      setToast({
        type: "success",
        title: "Import Queued",
        message: "412 vehicles will be processed in the next feed run."
      });
    }
  }, "Start import"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setDrawer(false)
  }, "Cancel")))) : null, /*#__PURE__*/React.createElement(ConfirmModal, {
    open: confirming,
    iconType: "warning",
    title: `Delete ${sel.length} vehicle${sel.length === 1 ? "" : "s"}?`,
    description: "Deleted vehicles leave the feed immediately and can be restored by stock number for 30 days.",
    confirmText: "Delete vehicles",
    confirmColor: "red",
    onConfirm: () => {
      setConfirming(false);
      setToast({
        type: "success",
        title: "Vehicles Deleted",
        message: `${sel.length} vehicle(s) were removed from the feed.`
      });
      setSel([]);
    },
    onCancel: () => setConfirming(false)
  }), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 24,
      bottom: 24,
      width: 380,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Notification, _extends({}, toast, {
    onDismiss: () => setToast(null)
  }))) : null);
}
Object.assign(window, {
  ImsInventory
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/leadbox_os/ImsInventory.jsx", error: String((e && e.message) || e) }); }

// ui_kits/leadbox_os/LenaDashboard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  StatCard,
  Tabs,
  Select,
  DataTable,
  TagBadge,
  Icon,
  Pagination
} = window.LeadboxDesignSystem_3e2c7f;
const LENA_LEADS = [{
  id: 1,
  customer: "Alicia Trent",
  number: "(905) 442-1180",
  dept: "Sales",
  intent: "New vehicle inquiry",
  score: "A",
  duration: "6:12",
  when: "Today 9:41 AM"
}, {
  id: 2,
  customer: "Dev Patel",
  number: "(416) 220-8834",
  dept: "Service",
  intent: "Book maintenance",
  score: "B+",
  duration: "3:48",
  when: "Today 9:12 AM"
}, {
  id: 3,
  customer: "Monique Farrow",
  number: "(519) 771-3092",
  dept: "Sales",
  intent: "Trade-in appraisal",
  score: "A-",
  duration: "8:03",
  when: "Yesterday 4:55 PM"
}, {
  id: 4,
  customer: "Grant Oyelaran",
  number: "(647) 330-2277",
  dept: "Parts",
  intent: "Part availability",
  score: "C",
  duration: "1:22",
  when: "Yesterday 2:14 PM"
}, {
  id: 5,
  customer: "Beth Kowalczyk",
  number: "(289) 118-4471",
  dept: "Sales",
  intent: "Financing question",
  score: "B",
  duration: "5:31",
  when: "Yesterday 11:02 AM"
}];

// Fixed order + labels from composables/useMissedConnections.js
const MISSED = [{
  name: "No pick-up",
  stat: "38",
  unit: "48% of missed connections"
}, {
  name: "On-hold hangups",
  stat: "21",
  unit: "27% of missed connections"
}, {
  name: "Agent unavailable",
  stat: "12",
  unit: "15% of missed connections"
}, {
  name: "After hours",
  stat: "8",
  unit: "10% of missed connections"
}];

/** Lena → Dashboard. Mirrors views/Lena/LenaDashboardView.vue + LenaDashboardView/CallStats.vue */
function LenaDashboard() {
  const [cat, setCat] = React.useState("All");
  const [year, setYear] = React.useState(2026);
  const [month, setMonth] = React.useState(7);
  const [rep, setRep] = React.useState("");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Dashboard"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 16,
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--color-stroke)",
      background: "var(--color-surface)",
      padding: 16,
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "var(--text-2xl)",
      fontWeight: "var(--font-weight-bold)",
      whiteSpace: "nowrap",
      color: "var(--color-ink)"
    }
  }, "Calls Overview"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement(Select, {
    name: "year",
    placeholder: "",
    value: year,
    onChange: e => setYear(Number(e.target.value)),
    options: [{
      value: 2026,
      label: "2026"
    }, {
      value: 2025,
      label: "2025"
    }],
    style: {
      width: 110
    }
  }), /*#__PURE__*/React.createElement(Select, {
    name: "month",
    placeholder: "",
    value: month,
    onChange: e => setMonth(Number(e.target.value)),
    options: [{
      value: 7,
      label: "July"
    }, {
      value: 6,
      label: "June"
    }, {
      value: 5,
      label: "May"
    }],
    style: {
      width: 140
    }
  }), /*#__PURE__*/React.createElement(Select, {
    name: "rep",
    placeholder: "All Users",
    value: rep,
    onChange: e => setRep(e.target.value),
    options: [{
      value: "1",
      label: "Dana Whitfield"
    }, {
      value: "2",
      label: "Marcus Ilunga"
    }, {
      value: "3",
      label: "Priya Raman"
    }],
    style: {
      width: 200
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["All", "Sales", "Service", "Parts", "Other"],
    value: cat,
    onChange: setCat
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    name: "Total calls",
    stat: "1,284",
    leadstreamStyle: true,
    change: "+8.2%",
    changeType: "increase",
    clickable: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    name: "Connected calls",
    stat: "906",
    ratio: 70.6,
    leadstreamStyle: true,
    change: "+4.1%",
    changeType: "increase",
    clickable: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    name: "Total leads",
    stat: "311",
    ratio: 34.3,
    leadstreamStyle: true,
    change: "-2.6%",
    changeType: "decrease",
    clickable: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    name: "Appointments set",
    stat: "128",
    ratio: 41.2,
    leadstreamStyle: true,
    change: "+11.9%",
    changeType: "increase",
    clickable: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    name: "CLEAR Score",
    stat: "B+",
    leadstreamStyle: true,
    unit: "19.2/25",
    statColor: "var(--color-green-dark)",
    clickable: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      gap: 16,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexGrow: 1,
      display: "flex",
      gap: 16,
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--color-yellow-dark-2)",
      background: "var(--color-subtle)",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      cursor: "pointer",
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontSize: "var(--text-2xl)",
      fontWeight: "var(--font-weight-bold)",
      color: "var(--color-secondarytext)"
    }
  }, "Missed connections"), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: "4px 0 0",
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-4xl)",
      fontWeight: "var(--font-weight-bold)",
      color: "var(--color-primarytext)"
    }
  }, "79", /*#__PURE__*/React.createElement(Icon, {
    name: "exclamation-triangle",
    size: 32,
    style: {
      color: "var(--color-yellow-dark-2)"
    }
  })), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: "4px 0 0",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-ink-4)"
    }
  }, "6.2% of total calls")), /*#__PURE__*/React.createElement("div", {
    style: {
      flexGrow: 1,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, MISSED.map(m => /*#__PURE__*/React.createElement(StatCard, _extends({
    key: m.name
  }, m, {
    leadstreamStyle: true,
    detailed: true,
    clickable: true
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--color-stroke)",
      background: "var(--color-subtle)",
      padding: 16,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontSize: "var(--text-2xl)",
      fontWeight: "var(--font-weight-bold)",
      color: "var(--color-secondarytext)"
    }
  }, "Voicemails"), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: "4px 0 0",
      fontSize: "var(--text-4xl)",
      fontWeight: "var(--font-weight-bold)",
      color: "var(--color-primarytext)"
    }
  }, "31"), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontSize: "var(--text-xs)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-secondarytext)"
    }
  }, "39% of missed"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(CallsChart, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    title: "Latest leads",
    searchable: true,
    rowClickable: true,
    columns: [{
      key: "customer",
      label: "Customer",
      sortable: true
    }, {
      key: "number",
      label: "Number"
    }, {
      key: "dept",
      label: "Department"
    }, {
      key: "intent",
      label: "Intent"
    }, {
      key: "score",
      label: "CLEAR",
      align: "center"
    }, {
      key: "duration",
      label: "Duration",
      align: "right"
    }, {
      key: "when",
      label: "When",
      align: "right",
      sortable: true
    }],
    items: LENA_LEADS,
    renderCell: (c, r) => c.key === "score" ? /*#__PURE__*/React.createElement(TagBadge, {
      type: r.score.startsWith("A") ? "success" : r.score.startsWith("B") ? "primary" : "warning"
    }, r.score) : c.key === "customer" ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: "var(--font-weight-medium)"
      }
    }, r.customer) : r[c.key],
    footer: /*#__PURE__*/React.createElement(Pagination, {
      total: 311,
      page: 1,
      perPage: 25
    })
  }))));
}

// Recreation of views/Lena/LenaDashboardView/CallsChart.vue — a Chart.js grouped
// bar chart (Connected #22AD5C / Total #D1D5DB, borderRadius 4, no chart legend;
// y grid #E5E7EB, 11px ticks; x labels 10px rotated 45°) inside a bordered card
// with a Connected / Total summary header.
const CHART_ROWS = [{
  label: "Google Ads",
  connected: 289,
  total: 412
}, {
  label: "Organic Search",
  connected: 214,
  total: 288
}, {
  label: "Facebook",
  connected: 132,
  total: 201
}, {
  label: "Direct",
  connected: 121,
  total: 174
}, {
  label: "Third-party Listings",
  connected: 84,
  total: 122
}, {
  label: "Other",
  connected: 66,
  total: 87
}];
const Y_TICKS = [400, 300, 200, 100, 0];
function CallsChart() {
  const plotHeight = 200;
  const max = Y_TICKS[0];
  // A 45deg-rotated label's box height is its unrotated text width x cos(45deg),
  // so the tick band is measured from the widest label rather than hardcoded.
  const labelRefs = React.useRef([]);
  const [bandHeight, setBandHeight] = React.useState(56);
  React.useLayoutEffect(() => {
    const widest = Math.max(...labelRefs.current.filter(Boolean).map(el => el.scrollWidth));
    if (Number.isFinite(widest)) setBandHeight(Math.ceil(widest * Math.SQRT1_2) + 4);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--color-stroke)",
      background: "var(--color-surface)",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      whiteSpace: "nowrap",
      fontSize: "var(--text-2xl)",
      fontWeight: "var(--font-weight-bold)",
      color: "var(--color-secondarytext)"
    }
  }, "Calls by Source"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-4xl)",
      fontWeight: "var(--font-weight-bold)",
      color: "var(--color-primarytext)",
      fontVariantNumeric: "tabular-nums"
    }
  }, "906"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--color-secondarytext)"
    }
  }, "Connected")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-secondarytext)"
    }
  }, "/"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-2xl)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--color-ink-4)",
      fontVariantNumeric: "tabular-nums"
    }
  }, "1,284"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--color-secondarytext)"
    }
  }, "Total"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--color-green-dark)"
    }
  }, "70.6% connection rate")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 2,
      background: "var(--color-green-dark)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-secondarytext)"
    }
  }, "Connected")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 2,
      background: "var(--color-soft-3)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-secondarytext)"
    }
  }, "Total")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginTop: 16,
      padding: 10,
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: plotHeight,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-end",
      fontSize: 11,
      color: "#9CA3AF",
      fontVariantNumeric: "tabular-nums"
    }
  }, Y_TICKS.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      lineHeight: 1,
      transform: "translateY(-50%)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: plotHeight
    }
  }, Y_TICKS.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: `${(1 - t / max) * plotHeight}px`,
      borderTop: "1px solid #E5E7EB"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-around"
    }
  }, CHART_ROWS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      flex: 1,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    title: `Connected: ${r.connected} calls`,
    style: {
      width: "26%",
      height: `${r.connected / max * plotHeight}px`,
      background: "#22AD5C",
      borderRadius: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    title: `Total: ${r.total} calls`,
    style: {
      width: "26%",
      height: `${r.total / max * plotHeight}px`,
      background: "#D1D5DB",
      borderRadius: 4
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-around",
      height: bandHeight
    }
  }, CHART_ROWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      flex: 1,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    ref: el => {
      labelRefs.current[i] = el;
    },
    style: {
      position: "absolute",
      left: "50%",
      bottom: 0,
      fontSize: 10,
      lineHeight: 1,
      color: "#9CA3AF",
      whiteSpace: "nowrap",
      transform: "rotate(-45deg)",
      transformOrigin: "left bottom"
    }
  }, r.label)))))));
}
Object.assign(window, {
  LenaDashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/leadbox_os/LenaDashboard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.TagBadge = __ds_scope.TagBadge;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.EmptyDataCard = __ds_scope.EmptyDataCard;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.ConfirmModal = __ds_scope.ConfirmModal;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Notification = __ds_scope.Notification;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.ToggleSwitch = __ds_scope.ToggleSwitch;

__ds_ns.SubTabs = __ds_scope.SubTabs;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.AppSidebar = __ds_scope.AppSidebar;

__ds_ns.Topbar = __ds_scope.Topbar;

})();
