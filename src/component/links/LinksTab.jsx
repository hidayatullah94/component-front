export const MainLink = [
  //!ADMIN
  { name: "Dashboard", href: "/adm", icon: House, roles: ["ADMIN"] },
  {
    name: "Pengguna Baru",
    href: "/adm/calon-user",
    icon: Users,
    roles: ["ADMIN"],
  },
  {
    name: "Booking",
    href: "/adm/booking",
    icon: WalletCards,
    roles: ["ADMIN"],
  },
  { name: "Sewa", href: "/adm/sewa", icon: Wallet, roles: ["ADMIN"] },
  { name: "Reports", href: "#", icon: ChartArea, roles: ["ADMIN"] },

  //! PENYEWA
  { name: "Dashboard", href: "/tenant", roles: ["PENYEWA"] },
  { name: "POS", href: "/tenant/POS", roles: ["PENYEWA"] },
  { name: "Produk", href: "/tenant/produk", roles: ["PENYEWA"] },

  {
    name: "Inventori",
    href: "/tenant/inventori",
    roles: ["PENYEWA"],
  },
  { name: "Tenant", href: "/tenant/tenant", roles: ["PENYEWA"] },
  {
    name: "Profil",
    href: "/tenant/profil",
    roles: ["PENYEWA"],
  },
  {
    name: "Report",
    href: "/tenant/report",
    roles: ["PENYEWA"],
  },
];

export const SecondLink = [
  {
    name: "Master",
    href: "/adm/master",
    initial: "M",
    roles: ["ADMIN"],
    submenu: [
      { name: "Denah", href: "/adm/master" },
      { name: "Tenan ", href: "/adm/master/tenant" },
      { name: "Penguna", href: "/adm/master/pengguna" },
      { name: "Penyewa", href: "/adm/master/penyewa" },
      { name: "Produk Tenan", href: "/adm/master/produk" },
    ],
  },
  {
    name: "Tailwind Labs",
    href: "#",
    initial: "T",
    roles: ["ADMIN"],
  },
];
