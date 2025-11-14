import * as React from "react"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type ImageViewerProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt?: string
  caption?: string
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt = "", caption, className, ...props }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt}
          className={cn(className ?? "", "cursor-zoom-in")}
          {...props}
        />
      </DialogTrigger>

      <DialogContent className="max-w-7xl p-0 sm:rounded-lg">
        <div className="w-full bg-background">
          <img src={src} alt={alt} className="w-full max-h-[80vh] object-contain" />
          {caption ? (
            <p className="text-sm text-muted-foreground p-4 text-center">{caption}</p>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ImageViewer
