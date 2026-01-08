"use client"

import Link from "next/link"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-zinc-200 last:border-b-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left group hover:bg-zinc-50/50 px-6 -mx-6 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-semibold text-zinc-900 pr-8">{question}</span>
        <svg
          className={`w-5 h-5 text-zinc-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6 px-6 -mx-6 text-base text-zinc-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
          {answer}
        </div>
      )}
    </div>
  )
}

export function FAQSection() {
  const { language } = useLanguage()

  const faqTranslations = {
    en: {
      sectionLabel: "FAQ",
      title: "Questions & Answers",
      description: "Everything you need to know about PawsBack",
      faqs: [
        {
          question: "How does PawsBack help me heal from pet loss?",
          answer:
            "PawsBack recreates the interactive experiences you had with your pet, allowing you to continue feeling their companionship. Pet their head, feed them, and have conversations—these familiar daily interactions help you gradually accept the loss while maintaining an emotional connection.",
        },
        {
          question: "What interactions can I have with my virtual pet?",
          answer:
            "You can pet their head and belly for different reactions, feed and water them with animated responses, and have conversations where they respond based on their personality (warm, playful, or calm). Premium members can also create custom memories like uploading photos of favorite treats.",
        },
        {
          question: "What is AI voice cloning?",
          answer:
            "This is a Premium feature that analyzes videos of your pet to clone their unique voice characteristics. After processing, your virtual pet will respond using this cloned voice during interactions, creating a more authentic and emotionally resonant experience.",
        },
        {
          question: "What materials do I need to create a virtual pet?",
          answer:
            "Basic plan requires only photos, your pet's name, and personality selection to start interacting immediately. Premium plan adds voice cloning, which needs at least 30 seconds of video with clear pet sounds for optimal results.",
        },
        {
          question: "Is my pet's data secure?",
          answer:
            "Absolutely. All uploaded photos, videos, and voice data are encrypted and stored securely, used solely to create your exclusive virtual pet. We never share your data with third parties. You can delete all data anytime from account settings.",
        },
        {
          question: "Does the virtual pet change based on time of day?",
          answer:
            "Yes! Your virtual pet recognizes real-world time and adjusts conversations accordingly. Late night visits might trigger comforting or sleepy messages, while mornings bring more energetic responses. This creates a more natural companionship experience.",
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer:
            "Of course. Cancel anytime from account settings with no cancellation fees. You'll continue enjoying member features until the current billing period ends. Your virtual pet and all data remain saved even after cancellation.",
        },
      ],
      contactText: "Still have questions?",
      contactLink: "Contact our support team",
    },
    zh: {
      sectionLabel: "常见问题",
      title: "问题与解答",
      description: "关于PawsBack您需要了解的一切",
      faqs: [
        {
          question: "PawsBack如何帮助我从失去宠物的痛苦中恢复?",
          answer:
            "PawsBack重现了您与宠物的互动体验,让您继续感受它们的陪伴。抚摸它们的头,喂食它们,与它们对话——这些熟悉的日常互动帮助您逐渐接受失去,同时保持情感连接。",
        },
        {
          question: "我可以与虚拟宠物进行哪些互动?",
          answer:
            "您可以抚摸它们的头和腹部以获得不同的反应,喂食和喂水并观看动画响应,以及进行对话,它们会根据性格(温暖、活泼或平静)做出回应。高级会员还可以创建自定义记忆,如上传最喜欢的零食照片。",
        },
        {
          question: "什么是AI声音克隆?",
          answer:
            "这是一项高级功能,通过分析您宠物的视频来克隆它们独特的声音特征。处理完成后,您的虚拟宠物将在互动时使用这个克隆的声音回应,创造更真实、更有情感共鸣的体验。",
        },
        {
          question: "创建虚拟宠物需要什么材料?",
          answer:
            "基础版只需要照片、宠物名字和性格选择即可立即开始互动。高级版增加了声音克隆功能,需要至少30秒清晰宠物声音的视频以获得最佳效果。",
        },
        {
          question: "我的宠物数据安全吗?",
          answer:
            "绝对安全。所有上传的照片、视频和声音数据都经过加密并安全存储,仅用于创建您专属的虚拟宠物。我们绝不会与第三方共享您的数据。您可以随时从账户设置中删除所有数据。",
        },
        {
          question: "虚拟宠物会根据一天中的时间变化吗?",
          answer:
            "是的!您的虚拟宠物能够识别真实世界的时间并相应调整对话。深夜访问可能会触发安慰或困倦的消息,而早晨则会带来更有活力的回应。这创造了更自然的陪伴体验。",
        },
        {
          question: "我可以随时取消订阅吗?",
          answer:
            "当然可以。随时从账户设置取消,无需取消费用。您将继续享受会员功能直到当前计费周期结束。即使取消后,您的虚拟宠物和所有数据仍然保存。",
        },
      ],
      contactText: "还有其他问题?",
      contactLink: "联系我们的支持团队",
    },
    ja: {
      sectionLabel: "よくある質問",
      title: "質問と回答",
      description: "PawsBackについて知っておくべきすべて",
      faqs: [
        {
          question: "PawsBackはペットの喪失から癒すのをどのように助けますか?",
          answer:
            "PawsBackはペットとの相互体験を再現し、彼らの仲間意識を感じ続けることができます。頭を撫で、餌をやり、会話する—これらの馴染みのある日常的な相互作用は、感情的なつながりを維持しながら徐々に喪失を受け入れるのを助けます。",
        },
        {
          question: "バーチャルペットとどのような相互作用ができますか?",
          answer:
            "頭とお腹を撫でてさまざまな反応を得たり、アニメーション付きで餌や水をやったり、性格(温かい、遊び好き、穏やか)に基づいて応答する会話をしたりできます。プレミアム会員は、お気に入りのおやつの写真をアップロードするなど、カスタム記憶を作成することもできます。",
        },
        {
          question: "AI音声クローンとは何ですか?",
          answer:
            "これはプレミアム機能で、ペットのビデオを分析して独自の音声特性をクローンします。処理後、バーチャルペットは相互作用中にこのクローン音声を使用して応答し、より本物で感情的に共鳴する体験を作り出します。",
        },
        {
          question: "バーチャルペットを作成するには何が必要ですか?",
          answer:
            "ベーシックプランでは、写真、ペットの名前、性格選択だけですぐに相互作用を始められます。プレミアムプランは音声クローンを追加し、最適な結果を得るには明確なペットの音が入った少なくとも30秒のビデオが必要です。",
        },
        {
          question: "ペットのデータは安全ですか?",
          answer:
            "絶対に。アップロードされたすべての写真、ビデオ、音声データは暗号化され安全に保存され、あなた専用のバーチャルペットを作成するためだけに使用されます。第三者とデータを共有することはありません。アカウント設定からいつでもすべてのデータを削除できます。",
        },
        {
          question: "バーチャルペットは時間帯に応じて変化しますか?",
          answer:
            "はい!バーチャルペットは実世界の時間を認識し、それに応じて会話を調整します。深夜の訪問は慰めや眠そうなメッセージをトリガーし、朝はよりエネルギッシュな応答をもたらします。これにより、より自然な仲間体験が生まれます。",
        },
        {
          question: "いつでもサブスクリプションをキャンセルできますか?",
          answer:
            "もちろん。アカウント設定からいつでもキャンセルでき、キャンセル料はかかりません。現在の請求期間が終了するまで、メンバー機能を引き続き楽しめます。キャンセル後もバーチャルペットとすべてのデータは保存されたままです。",
        },
      ],
      contactText: "まだ質問がありますか?",
      contactLink: "サポートチームに連絡",
    },
    ko: {
      sectionLabel: "자주 묻는 질문",
      title: "질문과 답변",
      description: "PawsBack에 대해 알아야 할 모든 것",
      faqs: [
        {
          question: "PawsBack은 반려동물 상실로부터 어떻게 치유하나요?",
          answer:
            "PawsBack은 반려동물과의 상호 작용 경험을 재현하여 그들의 동반자 관계를 계속 느낄 수 있게 합니다. 머리를 쓰다듬고, 먹이를 주고, 대화하세요—이러한 익숙한 일상적 상호 작용은 정서적 연결을 유지하면서 점진적으로 상실을 받아들이는 데 도움이 됩니다.",
        },
        {
          question: "가상 반려동물과 어떤 상호 작용을 할 수 있나요?",
          answer:
            "머리와 배를 쓰다듬어 다양한 반응을 얻고, 애니메이션 반응과 함께 먹이와 물을 주고, 성격(따뜻한, 장난스러운 또는 차분한)에 따라 응답하는 대화를 할 수 있습니다. 프리미엄 회원은 좋아하는 간식 사진을 업로드하는 등 맞춤 기억을 만들 수도 있습니다.",
        },
        {
          question: "AI 음성 복제란 무엇인가요?",
          answer:
            "이것은 반려동물의 비디오를 분석하여 고유한 음성 특성을 복제하는 프리미엄 기능입니다. 처리 후 가상 반려동물은 상호 작용 중에 이 복제된 음성을 사용하여 응답하며, 더 진정성 있고 감정적으로 공명하는 경험을 만듭니다.",
        },
        {
          question: "가상 반려동물을 만들려면 무엇이 필요한가요?",
          answer:
            "기본 플랜은 사진, 반려동물 이름, 성격 선택만으로 즉시 상호 작용을 시작할 수 있습니다. 프리미엄 플랜은 음성 복제를 추가하며, 최적의 결과를 위해 명확한 반려동물 소리가 있는 최소 30초의 비디오가 필요합니다.",
        },
        {
          question: "반려동물 데이터는 안전한가요?",
          answer:
            "물론입니다. 업로드된 모든 사진, 비디오 및 음성 데이터는 암호화되어 안전하게 저장되며, 전용 가상 반려동물을 만드는 데만 사용됩니다. 제3자와 데이터를 공유하지 않습니다. 계정 설정에서 언제든지 모든 데이터를 삭제할 수 있습니다.",
        },
        {
          question: "가상 반려동물은 시간대에 따라 변하나요?",
          answer:
            "네! 가상 반려동물은 실제 시간을 인식하고 그에 따라 대화를 조정합니다. 늦은 밤 방문은 위로하거나 졸린 메시지를 트리거할 수 있으며, 아침에는 더 활기찬 응답을 제공합니다. 이것은 더 자연스러운 동반자 경험을 만듭니다.",
        },
        {
          question: "언제든지 구독을 취소할 수 있나요?",
          answer:
            "물론입니다. 계정 설정에서 언제든지 취소할 수 있으며 취소 수수료가 없습니다. 현재 청구 기간이 끝날 때까지 회원 기능을 계속 즐길 수 있습니다. 취소 후에도 가상 반려동물과 모든 데이터는 저장된 상태로 유지됩니다.",
        },
      ],
      contactText: "아직 질문이 있으신가요?",
      contactLink: "지원 팀에 문의",
    },
    fr: {
      sectionLabel: "FAQ",
      title: "Questions et réponses",
      description: "Tout ce que vous devez savoir sur PawsBack",
      faqs: [
        {
          question: "Comment PawsBack m'aide-t-il à guérir de la perte d'un animal?",
          answer:
            "PawsBack recrée les expériences interactives que vous aviez avec votre animal, vous permettant de continuer à ressentir leur compagnie. Caressez leur tête, nourrissez-les et conversez—ces interactions quotidiennes familières vous aident à accepter progressivement la perte tout en maintenant un lien émotionnel.",
        },
        {
          question: "Quelles interactions puis-je avoir avec mon animal virtuel?",
          answer:
            "Vous pouvez caresser leur tête et leur ventre pour différentes réactions, les nourrir et les abreuver avec des réponses animées, et avoir des conversations où ils répondent selon leur personnalité (chaleureux, joueur ou calme). Les membres Premium peuvent également créer des souvenirs personnalisés comme télécharger des photos de friandises préférées.",
        },
        {
          question: "Qu'est-ce que le clonage vocal IA?",
          answer:
            "C'est une fonctionnalité Premium qui analyse les vidéos de votre animal pour cloner leurs caractéristiques vocales uniques. Après traitement, votre animal virtuel répondra en utilisant cette voix clonée lors des interactions, créant une expérience plus authentique et émotionnellement résonnante.",
        },
        {
          question: "De quoi ai-je besoin pour créer un animal virtuel?",
          answer:
            "Le plan Basic nécessite seulement des photos, le nom de votre animal et la sélection de personnalité pour commencer à interagir immédiatement. Le plan Premium ajoute le clonage vocal, qui nécessite au moins 30 secondes de vidéo avec des sons d'animaux clairs pour des résultats optimaux.",
        },
        {
          question: "Les données de mon animal sont-elles sécurisées?",
          answer:
            "Absolument. Toutes les photos, vidéos et données vocales téléchargées sont cryptées et stockées en toute sécurité, utilisées uniquement pour créer votre animal virtuel exclusif. Nous ne partageons jamais vos données avec des tiers. Vous pouvez supprimer toutes les données à tout moment depuis les paramètres du compte.",
        },
        {
          question: "L'animal virtuel change-t-il selon l'heure de la journée?",
          answer:
            "Oui! Votre animal virtuel reconnaît l'heure du monde réel et ajuste les conversations en conséquence. Les visites nocturnes peuvent déclencher des messages réconfortants ou somnolents, tandis que les matins apportent des réponses plus énergiques. Cela crée une expérience de compagnie plus naturelle.",
        },
        {
          question: "Puis-je annuler mon abonnement à tout moment?",
          answer:
            "Bien sûr. Annulez à tout moment depuis les paramètres du compte sans frais d'annulation. Vous continuerez à profiter des fonctionnalités membres jusqu'à la fin de la période de facturation en cours. Votre animal virtuel et toutes les données restent sauvegardés même après l'annulation.",
        },
      ],
      contactText: "Vous avez encore des questions?",
      contactLink: "Contactez notre équipe d'assistance",
    },
    de: {
      sectionLabel: "FAQ",
      title: "Fragen und Antworten",
      description: "Alles, was Sie über PawsBack wissen müssen",
      faqs: [
        {
          question: "Wie hilft mir PawsBack bei der Heilung vom Verlust eines Haustieres?",
          answer:
            "PawsBack recreates the interactive experiences you had with your pet, allowing you to continue feeling their companionship. Pet their head, feed them, and have conversations—these familiar daily interactions help you gradually accept the loss while maintaining an emotional connection.",
        },
        {
          question: "Welche Interaktionen kann ich mit meinem virtuellen Haustier haben?",
          answer:
            "Sie können ihren Kopf und Bauch für verschiedene Reaktionen streicheln, sie mit animierten Antworten füttern und tränken und Gespräche führen, bei denen sie je nach Persönlichkeit (warm, verspielt oder ruhig) antworten. Premium-Mitglieder können auch benutzerdefinierte Erinnerungen erstellen, wie das Hochladen von Fotos von Lieblingsleckereien.",
        },
        {
          question: "Was ist AI-Stimmklonen?",
          answer:
            "Dies ist eine Premium-Funktion, die Videos Ihres Haustieres analysiert, um ihre einzigartigen Stimmmerkmale zu klonen. Nach der Verarbeitung antwortet Ihr virtuelles Haustier während der Interaktionen mit dieser geklonten Stimme, was ein authentischeres und emotional resonierenderes Erlebnis schafft.",
        },
        {
          question: "Was brauche ich, um ein virtuelles Haustier zu erstellen?",
          answer:
            "Der Basic-Plan erfordert nur Fotos, den Namen Ihres Haustieres und die Persönlichkeitsauswahl, um sofort mit der Interaktion zu beginnen. Der Premium-Plan fügt Stimmklonen hinzu, das mindestens 30 Sekunden Video mit klaren Haustiergeräuschen für optimale Ergebnisse benötigt.",
        },
        {
          question: "Sind die Daten meines Haustieres sicher?",
          answer:
            "Absolut. Alle hochgeladenen Fotos, Videos und Sprachdaten werden verschlüsselt und sicher gespeichert, ausschließlich zur Erstellung Ihres exklusiven virtuellen Haustieres verwendet. Wir teilen Ihre Daten niemals mit Dritten. Sie können alle Daten jederzeit aus den Kontoeinstellungen löschen.",
        },
        {
          question: "Ändert sich das virtuelle Haustier je nach Tageszeit?",
          answer:
            "Ja! Ihr virtuelles Haustier erkennt die reale Zeit und passt Gespräche entsprechend an. Spätabendliche Besuche können tröstende oder schläfrige Nachrichten auslösen, während Morgen energischere Antworten bringen. Dies schafft eine natürlichere Begleitungserfahrung.",
        },
        {
          question: "Kann ich mein Abonnement jederzeit kündigen?",
          answer:
            "Natürlich. Kündigen Sie jederzeit in den Kontoeinstellungen ohne Kündigungsgebühren. Sie genießen weiterhin Mitgliedsfunktionen bis zum Ende des aktuellen Abrechnungszeitraums. Ihr virtuelles Haustier und alle Daten bleiben auch nach der Kündigung gespeichert.",
        },
      ],
      contactText: "Haben Sie noch Fragen?",
      contactLink: "Kontaktieren Sie unser Support-Team",
    },
    es: {
      sectionLabel: "Preguntas frecuentes",
      title: "Preguntas y respuestas",
      description: "Todo lo que necesitas saber sobre PawsBack",
      faqs: [
        {
          question: "¿Cómo me ayuda PawsBack a sanar de la pérdida de una mascota?",
          answer:
            "PawsBack recrea las experiencias interactivas que tenías con tu mascota, permitiéndote continuar sintiendo su compañía. Acaricia su cabeza, aliméntala y ten conversaciones—estas interacciones diarias familiares te ayudan a aceptar gradualmente la pérdida mientras mantienes una conexión emocional.",
        },
        {
          question: "¿Qué interacciones puedo tener con mi mascota virtual?",
          answer:
            "Puedes acariciar su cabeza y vientre para diferentes reacciones, alimentarla y darle agua con respuestas animadas, y tener conversaciones donde responden según su personalidad (cálida, juguetona o tranquila). Los miembros Premium también pueden crear recuerdos personalizados como subir fotos de golosinas favoritas.",
        },
        {
          question: "¿Qué es la clonación de voz AI?",
          answer:
            "Esta es una característica Premium que analiza videos de tu mascota para clonar sus características vocales únicas. Después del procesamiento, tu mascota virtual responderá usando esta voz clonada durante las interacciones, creando una experiencia más auténtica y emocionalmente resonante.",
        },
        {
          question: "¿Qué materiales necesito para crear una mascota virtual?",
          answer:
            "El plan Basic requiere solo fotos, el nombre de tu mascota y selección de personalidad para comenzar a interactuar inmediatamente. El plan Premium agrega clonación de voz, que necesita al menos 30 segundos de video con sonidos claros de mascota para resultados óptimos.",
        },
        {
          question: "¿Son seguros los datos de mi mascota?",
          answer:
            "Absolutamente. Todas las fotos, videos y datos de voz subidos están encriptados y almacenados de forma segura, utilizados únicamente para crear tu mascota virtual exclusiva. Nunca compartimos tus datos con terceros. Puedes eliminar todos los datos en cualquier momento desde la configuración de la cuenta.",
        },
        {
          question: "¿La mascota virtual cambia según la hora del día?",
          answer:
            "¡Sí! Tu mascota virtual reconoce la hora del mundo real y ajusta las conversaciones en consecuencia. Las visitas nocturnas pueden desencadenar mensajes reconfortantes o somnolientos, mientras que las mañanas traen respuestas más enérgicas. Esto crea una experiencia de compañía más natural.",
        },
        {
          question: "¿Puedo cancelar mi suscripción en cualquier momento?",
          answer:
            "Por supuesto. Cancela en cualquier momento desde la configuración de la cuenta sin tarifas de cancelación. Continuarás disfrutando de las funciones de miembro hasta que finalice el período de facturación actual. Tu mascota virtual y todos los datos permanecen guardados incluso después de la cancelación.",
        },
      ],
      contactText: "¿Aún tienes preguntas?",
      contactLink: "Contacta a nuestro equipo de soporte",
    },
  }

  const t = faqTranslations[language]

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-zinc-500 tracking-wider uppercase mb-3">{t.sectionLabel}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">{t.title}</h2>
          <p className="text-lg text-zinc-600">{t.description}</p>
        </div>

        <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-sm">
          <div className="divide-y divide-zinc-200">
            {t.faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-600 mb-4">{t.contactText}</p>
          <Link
            href="/contact"
            className="text-zinc-900 font-medium hover:text-zinc-700 transition-colors inline-flex items-center gap-2"
          >
            {t.contactLink}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
