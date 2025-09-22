const StatsSection = () => {
  const stats = [
    {
      number: "15,701,000小时",
      label: "累积服务时长",
    },
    {
      number: "700,000+",
      label: "累计服务人次",
    },
    {
      number: "21,976+门",
      label: "覆盖全球课程数量",
    },
    {
      number: "1,278所",
      label: "服务覆盖全球校区数",
    },
    {
      number: "8,276",
      label: "全球导师人数",
    },
    {
      number: "97.20 %",
      label: "全球TOP100高校导师占比",
    },
  ];

  return (
    <section className="py-16 bg-stats-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            *数据来源：截至2025年7月31日历史用户调研
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;