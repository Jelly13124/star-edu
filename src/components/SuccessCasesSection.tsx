import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Import appeal case images
import case1 from "@/assets/appeal cases/0a2c3d3a19906709f4c09875c0116bf6.jpg";
import case2 from "@/assets/appeal cases/51ee1ef501addab4fe7de9a24cc29b8c.jpg";
import case3 from "@/assets/appeal cases/8206d63daabb4a1b553a49980933daf6.jpg";
import case4 from "@/assets/appeal cases/843adfff10ec60db2820f381ed98c404.jpg";

const SuccessCasesSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const successCases = [
    { id: 1, image: case1, alt: "成功案例 1" },
    { id: 2, image: case2, alt: "成功案例 2" },
    { id: 3, image: case3, alt: "成功案例 3" },
    { id: 4, image: case4, alt: "成功案例 4" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">成功案例</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            真实案例见证我们的专业实力，每一个成功都是对我们服务的最好证明
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {successCases.map((caseItem) => (
            <Card 
              key={caseItem.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(caseItem.image)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={caseItem.image}
                    alt={caseItem.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium">点击查看详情</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Preview Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-transparent border-0">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 z-50 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all shadow-lg"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
              {selectedImage && (
                <img 
                  src={selectedImage}
                  alt="案例详情"
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default SuccessCasesSection;

