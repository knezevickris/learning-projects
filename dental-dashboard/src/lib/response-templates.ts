export function getNegativeResponseTemplate(authorName: string): string {
    const templates = [
        `Hi ${authorName.split(' ')[0]}, we're truly sorry to hear about your experience. We value our patients' feedback and would like to learn more. Please contact our office manager so we can address your concerns directly.`,
        `Hello ${authorName.split(' ')[0]}, we apologize for falling short of your expectations. We strive for excellence and would appreciate the chance to make this right. Please reach out to us at your earliest convenience.`,
        `Dear ${authorName.split(' ')[0]}, thank you for bringing this to our attention. We are committed to providing high-quality care and are sorry you didn't feel that during your visit. We would love to discuss this further with you.`,
        `We appreciate your honest feedback. We are constantly working to improve our patient experience and would like to hear more about where we can improve. Please reach out to our team at the office.`
    ];
    return templates[authorName.length % templates.length];
}
