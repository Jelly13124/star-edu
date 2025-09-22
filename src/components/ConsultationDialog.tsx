import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationDialog = ({ open, onOpenChange }: ConsultationDialogProps) => {
  const { toast } = useToast();
  const wechatId = "Jelly13124";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(wechatId);
    toast({
      title: "微信号已复制",
      description: "微信号已复制到剪贴板",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-bold text-gray-800">
            <MessageCircle className="h-6 w-6 text-blue-500" />
            专业咨询
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            请加微信与我们的专业老师咨询
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-4 py-4">
          <div className="bg-gradient-to-r from-blue-100 to-sky-100 p-6 rounded-lg text-center w-full">
            <p className="text-lg font-semibold text-gray-800 mb-2">微信号</p>
            <div className="flex items-center justify-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span className="text-xl font-bold text-blue-600">{wechatId}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyToClipboard}
                className="h-8 w-8 p-0"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              添加微信后，我们的专业老师将为您提供：
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• 免费学术咨询</li>
              <li>• 个性化辅导方案</li>
              <li>• 专业导师匹配</li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            onClick={() => onOpenChange(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            知道了
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;