interface TextLimitProps {
   text: string;
   limit: number;
}

export function TextLimit({ text, limit }: TextLimitProps) {
   const textLimited = text.length > limit ? `${text.substring(0, limit)}...`: text;

   return <p>{textLimited}</p>;
}