const translationData = [
  {
    "machine_sentence": "هذا هو مكاننا المفضل على الشاطئ. رائع. حسناً",
    "proof_sentence": "- هذا هو مكاننا المفضل على الشاطئ - رائع. حسناً",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 4,
      "TerminologyConsistency": 5,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "PunctuationErrors": 1,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 5,
      "Reflection": "No significant adjustments needed. The absence of dashes is a minor punctuation<br>issue.",
      "Error": null
    }
  },
  {
    "machine_sentence": "يبدو أنه يواجه بعض الصعوبات. أخذته إلى الطبيب البيطري",
    "proof_sentence": "يبدو أنه يواجه بعض الصعوبات فأخذته إلى الطبيب البيطري",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 4,
      "GrammaticalCorrectness": 5,
      "Punctuation": 5,
      "TerminologyConsistency": 5,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "OmissionAdditionErrors": 1,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 4,
      "Reflection": "The omission of the conjunction 'فـ' slightly affects fluency and style, but<br>the overall meaning is preserved.",
      "Error": null
    }
  },
  {
    "machine_sentence": "كنت سأفاجئك بشيء ما",
    "proof_sentence": "كنت سأفاجئك بشيء ما",
    "api_response": {
      "SemanticAccuracy": 5,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 5,
      "TerminologyConsistency": 5,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "Severity": "None"
      },
      "OverallQuality": 5,
      "PostEditingEffort": 5,
      "Reflection": "",
      "Error": null
    }
  },
  {
    "machine_sentence": "هل هو يبكي؟. نعم. كلبها، (ميلر)",
    "proof_sentence": "- مرحباً - أتودين رؤيته؟. - هل هو يبكي؟ - نعم. كلبها، (ميلر)",
    "api_response": {
      "SemanticAccuracy": 3,
      "Fluency": 4,
      "GrammaticalCorrectness": 5,
      "Punctuation": 4,
      "TerminologyConsistency": 5,
      "StyleTone": 3,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "2",
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "OmissionAdditionErrors": 2,
        "IdiomMistranslationErrors": 0,
        "Severity": "Major"
      },
      "OverallQuality": 3,
      "PostEditingEffort": 3,
      "Reflection": "The omission of key elements affects semantic accuracy and style, requiring<br>moderate post-editing effort.",
      "Error": null
    }
  },
  {
    "machine_sentence": "حقاً؟. نعم. يمكننا الذهاب",
    "proof_sentence": "- حقاً؟ - نعم، يمكننا الذهاب",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 4,
      "GrammaticalCorrectness": 5,
      "Punctuation": 3,
      "TerminologyConsistency": 5,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "PunctuationErrors": 1,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 4,
      "Reflection": "No adjustments needed. Minor punctuation issues slightly affect the overall<br>score.",
      "Error": null
    }
  },
  {
    "machine_sentence": "مرحباً، (آنا)",
    "proof_sentence": "احذري، (آنا)",
    "api_response": {
      "SemanticAccuracy": 1,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 5,
      "TerminologyConsistency": 2,
      "StyleTone": 2,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 1,
        "TermMisuseErrors": 1,
        "IdiomMistranslationErrors": 0,
        "Severity": "Major"
      },
      "OverallQuality": 2,
      "PostEditingEffort": 1,
      "Reflection": "The significant meaning loss and terminology error heavily impact the overall<br>quality score.",
      "Error": null
    }
  },
  {
    "machine_sentence": "لكن أعني، يمكنك فقط إعطاؤه كميات صغيرة في كل مرة. (برايس) وأنا تحدثنا<br>نوعاً ما عن. مثل، لا نريده أن يستمر في الألم",
    "proof_sentence": "لكن يمكن إعطاؤه كميات صغيرة في كل مرة. أنا و(برايس) تحدثنا نوعاً ما<br>عن أننا لا نريده أن يستمر في التألم",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 4,
      "GrammaticalCorrectness": 5,
      "Punctuation": 5,
      "TerminologyConsistency": 4,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": 2,
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 1,
        "TermMisuseErrors": 1,
        "IdiomMistranslationErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 3,
      "Reflection": "The direct address and slight semantic shift in terminology slightly reduce the<br>scores for semantic accuracy and style.",
      "Error": null
    }
  },
  {
    "machine_sentence": "أو ضفدع بني. إذن، هل لا يبقونه تحت التخدير؟. نعم، يبقونه",
    "proof_sentence": "أو ضفدع بني. - إذاً، ألا يبقونه تحت التخدير؟ - نعم",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 4,
      "GrammaticalCorrectness": 5,
      "Punctuation": 3,
      "TerminologyConsistency": 5,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "2",
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "PunctuationErrors": 1,
        "IdiomMistranslationErrors": 0,
        "Severity": "Major"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 3,
      "Reflection": "The lack of dashes affects punctuation and style, but the overall meaning<br>is preserved.",
      "Error": null
    }
  },
  {
    "machine_sentence": "فهمت؟. حسناً، كما تعلم، من الأفضل أن أتعامل مع هذا. لأن عليك أن<br>تتعامل مع المرآب",
    "proof_sentence": "كما تعلم، من الأفضل أن أهتم بهذا لأن عليك أن تهتم بالمرأب",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 4,
      "GrammaticalCorrectness": 5,
      "Punctuation": 5,
      "TerminologyConsistency": 5,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": 1,
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 1,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "OmissionAdditionErrors": 1,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 3,
      "Reflection": "The addition at the beginning slightly affects semantic accuracy and style, but<br>overall quality remains high.",
      "Error": null
    }
  },
  {
    "machine_sentence": "أعني، حقاً، في هذه المرحلة. ما الذي يمكن أن يكون أكبر من هذا؟.<br>آخذك في رحلة قبل ولادة الطفل",
    "proof_sentence": "حقاً، في هذه المرحلة، ما الذي يمكن أن يكون أكبر من هذا؟. سآخذك<br>في رحلة قبل ولادة الطفل",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 4,
      "GrammaticalCorrectness": 4,
      "Punctuation": 5,
      "TerminologyConsistency": 5,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": 2,
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 1,
        "MeaningLossErrors": 1,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 3,
      "Reflection": "The omission of 'س' and the addition of 'أعني' slightly affect the<br>overall quality, but no major adjustments are needed.",
      "Error": null
    }
  },
  {
    "machine_sentence": "استعد. أنت محدد. انطلق. اللعنة، أنت تشرب بسرعة",
    "proof_sentence": "انتبهوا، استعدوا، انطلقوا!. يا للهول، أنت تشرب بسرعة انظر إلى ذلك",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 4,
      "GrammaticalCorrectness": 5,
      "Punctuation": 3,
      "TerminologyConsistency": 5,
      "StyleTone": 3,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": 2,
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 1,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "OmissionAdditionErrors": 1,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 3,
      "Reflection": "The translation is mostly accurate but lacks some elements present in the<br>proofread version. Minor adjustments in style and punctuation are needed.",
      "Error": null
    }
  },
  {
    "machine_sentence": "كنت متحمسة جداً. سعيدة جداً، وكنت أعلم أين سنذهب غير (بينساكولا). (فلوريدا)",
    "proof_sentence": "كنت متحمسة جداً وسعيدة جداً. وكنت أعلم أين سنذهب غير (بينساكولا، فلوريدا)",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 4,
      "GrammaticalCorrectness": 5,
      "Punctuation": 3,
      "TerminologyConsistency": 5,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "2",
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "PunctuationErrors": 1,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "OmissionAdditionErrors": 0,
        "IdiomMistranslationErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 3,
      "Reflection": "The main issues are related to punctuation and slight fluency differences. No<br>major adjustments needed.",
      "Error": null
    }
  },
  {
    "machine_sentence": "واكتشفوا أن (ميلر) قد أكل بعض الفطر الذي يمكن أن. يكون قد نما<br>في الفناء",
    "proof_sentence": "واكتشفوا أن (ميلر) قد أكل بعض الفطر الذي يمكن أن يكون قد نما<br>في الفناء",
    "api_response": {
      "SemanticAccuracy": 5,
      "Fluency": 5,
      "GrammaticalCorrectness": 4,
      "Punctuation": 3,
      "TerminologyConsistency": 5,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "PunctuationErrors": 1,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "OmissionAdditionErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 4,
      "Reflection": "The individual scores accurately reflect the quality of the translation. The<br>minor punctuation issue slightly affects the overall quality.",
      "Error": null
    }
  },
  {
    "machine_sentence": "قلت لها، مهلاً، (آنا)، هذا ليس زجاجة (فودكا). نعم",
    "proof_sentence": "- لأنها تجلس في الغرفة مباشرة - قلت لها، مهلاً، (آنا). - هذه<br>ليست زجاجة (فودكا) - نعم",
    "api_response": {
      "SemanticAccuracy": 3,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 4,
      "TerminologyConsistency": 5,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": 1,
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "PunctuationErrors": 1,
        "MeaningLossErrors": 1,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "OmissionAdditionErrors": 1,
        "Severity": {
          "PunctuationErrors": "Minor",
          "MeaningLossErrors": "Major",
          "OmissionAdditionErrors": "Major"
        }
      },
      "OverallQuality": 3,
      "PostEditingEffort": 3,
      "Reflection": "The omission of the initial context significantly impacts semantic accuracy,<br>requiring moderate post-editing effort.",
      "Error": null
    }
  },
  {
    "machine_sentence": "انظر إلى ذلك. ابنتي الكبرى، يمكننا أن نعرف ماذا تفعل في عطلات نهاية<br>الأسبوع لأنها. تجلس في الغرفة مباشرة",
    "proof_sentence": "ابنتي الكبرى، يمكننا أن نعرف ماذا تفعل في عطلات نهاية الأسبوع",
    "api_response": {
      "SemanticAccuracy": 3,
      "Fluency": 3,
      "GrammaticalCorrectness": 4,
      "Punctuation": 2,
      "TerminologyConsistency": 5,
      "StyleTone": 3,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "PunctuationErrors": 2,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "OmissionAdditionErrors": 1,
        "IdiomMistranslationErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 3,
      "PostEditingEffort": 3,
      "Reflection": "The additional phrases in the MT_content introduce minor issues in fluency and<br>punctuation, but the core meaning is retained.",
      "Error": null
    }
  },
  {
    "machine_sentence": "لأننا لم نعد الباب بعد. سأقوم بهذا",
    "proof_sentence": "بما أننا لا تملك جهاز فتح الباب بعد، سأقوم بهذا",
    "api_response": {
      "SemanticAccuracy": 2,
      "Fluency": 3,
      "GrammaticalCorrectness": 5,
      "Punctuation": 5,
      "TerminologyConsistency": 2,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 1,
        "TermMisuseErrors": 1,
        "IdiomMistranslationErrors": 0,
        "Severity": "Major"
      },
      "OverallQuality": 3,
      "PostEditingEffort": 3,
      "Reflection": "The significant meaning loss and terminology error require moderate post-editing<br>effort.",
      "Error": null
    }
  },
  {
    "machine_sentence": "نعم. إذا نفدت ملابسك الداخلية قبلي. لن تستعير ملابسي",
    "proof_sentence": "نعم. إذا نفدت ملابسك الداخلية قبلي لن تستعير ملابسي",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 4,
      "TerminologyConsistency": 5,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "PunctuationErrors": 1,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 5,
      "PostEditingEffort": 5,
      "Reflection": "",
      "Error": null
    }
  },
  {
    "machine_sentence": "إنها رحلة تستغرق حوالي ست ساعات. لذا سأحاول القيادة لثلاث ساعات",
    "proof_sentence": "إنها رحلة تستغرق حوالى ست ساعات لذا سأحاول القيادة لثلاث ساعات",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 4,
      "TerminologyConsistency": 5,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "PunctuationErrors": 1,
        "Severity": "Minor"
      },
      "OverallQuality": 5,
      "PostEditingEffort": 5,
      "Reflection": "",
      "Error": null
    }
  },
  {
    "machine_sentence": "نعم. حسناً، سأذهب وأخذك إلى السيارة. حيث يعيد الطرق",
    "proof_sentence": "نعم، سآخذك إلى السيارة أولاً ثم أعود",
    "api_response": {
      "SemanticAccuracy": 3,
      "Fluency": 3,
      "GrammaticalCorrectness": 4,
      "Punctuation": 4,
      "TerminologyConsistency": 4,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": 2,
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "MeaningLossErrors": 1,
        "FluencyIssues": 1,
        "PunctuationErrors": 1,
        "Severity": {
          "MeaningLoss": "Major",
          "Fluency": "Minor",
          "Punctuation": "Minor"
        }
      },
      "OverallQuality": 3,
      "PostEditingEffort": 3,
      "Reflection": "The introduction of an irrelevant phrase significantly affects semantic accuracy<br>and fluency, requiring moderate post-editing effort.",
      "Error": null
    }
  },
  {
    "machine_sentence": "وهذه الإجازة قبل ولادة الطفل ستكون استراحة لطيفة من عدم التفكير في. أي<br>شيء",
    "proof_sentence": "وهذه الإجازة قبل ولادة الطفل ستكون استراحة جميلة من عدم التفكير بأي شيء",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 5,
      "TerminologyConsistency": 5,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 1,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 5,
      "PostEditingEffort": 5,
      "Reflection": "",
      "Error": null
    }
  },
  {
    "machine_sentence": "لأنني نسيت أن أمي لا تزال تملك جهاز فتح الباب. حسناً. عمل جيد",
    "proof_sentence": "لأنني نسيت أن أمي لا تزال تملك جهاز فتح الباب. - حسناً -<br>عمل جيد",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 4,
      "TerminologyConsistency": 5,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": 1,
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "PunctuationErrors": 1,
        "Severity": "Minor"
      },
      "OverallQuality": 4.5,
      "PostEditingEffort": 4.5,
      "Reflection": "No significant adjustments needed. Minor punctuation issue noted.",
      "Error": null
    }
  },
  {
    "machine_sentence": "لكن بالطبع. سنفكر فيها. لكن فقط نجلس هناك ونسترخي. دون الحاجة للقلق بشأن<br>أي شيء",
    "proof_sentence": "لكن بالطبع سنفكر فيها. لكننا سنجلس هناك ونسترخي من دون الحاجة للقلق بشأن<br>أي شيء",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 4,
      "GrammaticalCorrectness": 4,
      "Punctuation": 5,
      "TerminologyConsistency": 5,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": 1,
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "OmissionAdditionErrors": 1,
        "IdiomMistranslationErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 4,
      "Reflection": "No adjustments needed. The omission of 'لكننا' is a minor issue affecting<br>subject clarity.",
      "Error": null
    }
  },
  {
    "machine_sentence": "حسناً. كان الأمر صعباً حقاً بعد فقدان (ميلر). العودة إلى نمط حياة الأطفال.<br>لذا عندما أخبرني (برايس) أنه خطط لرحلة صغيرة لنا",
    "proof_sentence": "حسناً. كان الأمر صعباً حقاً بعد فقدان (ميلر) العودة إلى نمط حياة الأطفال.<br>لذا عندما أخبرني (برايس) أنه خطط لرحلة صغيرة لنا",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 4,
      "GrammaticalCorrectness": 5,
      "Punctuation": 3,
      "TerminologyConsistency": 5,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": 2,
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "PunctuationErrors": 1,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "OmissionAdditionErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 4,
      "Reflection": "No adjustments needed. The translation is accurate with minor punctuation<br>issues.",
      "Error": null
    }
  },
  {
    "machine_sentence": "حسناً. عليك إغلاق المرآب. سأغلقه",
    "proof_sentence": "أجل. - حسناً، عليك إغلاق المرأب - سأغلقه",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 4,
      "TerminologyConsistency": 5,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "OmissionAdditionErrors": 1,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 4,
      "Reflection": "The omission of 'أجل' is minor and does not significantly impact the<br>overall quality. The translation is fluent and grammatically correct.",
      "Error": null
    }
  },
  {
    "machine_sentence": "ماذا سنفعل عندما نصطادها؟. مثل. أعلم أنك تعرف ماذا تفعل",
    "proof_sentence": "ماذا سنفعل عندما نصطادها؟ أعلم أنك تعرف ماذا تفعل لكن...",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 4,
      "TerminologyConsistency": 5,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "2",
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "OmissionAdditionErrors": 1,
        "PunctuationErrors": 1,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 4,
      "Reflection": "The omission of 'لكن' and minor punctuation issue slightly affect the overall<br>quality, but the translation remains largely accurate and fluent.",
      "Error": null
    }
  },
  {
    "machine_sentence": "وهو سيقود لثلاث ساعات أو أكثر",
    "proof_sentence": "وهو سيقود لثلاث ساعات أو أكثر",
    "api_response": {
      "SemanticAccuracy": 5,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 5,
      "TerminologyConsistency": 5,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "Severity": "None"
      },
      "OverallQuality": 5,
      "PostEditingEffort": 5,
      "Reflection": "",
      "Error": null
    }
  },
  {
    "machine_sentence": "لكن، مثل. مرحباً، اسحبها، التقط صورة، ثم أطلق سراحها. هذا كل ما تفعله",
    "proof_sentence": "سنسحبها ونلتقط صورة ثم سنطلق سراحها. هذا كل ما سنفعله",
    "api_response": {
      "SemanticAccuracy": 3,
      "Fluency": 3,
      "GrammaticalCorrectness": 4,
      "Punctuation": 4,
      "TerminologyConsistency": 4,
      "StyleTone": 3,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "2",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 1,
        "MeaningLossErrors": 1,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 3,
      "PostEditingEffort": 3,
      "Reflection": "The additional elements in the MT_content and the awkward phrasing at the<br>beginning slightly reduce the overall score.",
      "Error": null
    }
  },
  {
    "machine_sentence": "نحن السمكة في الماء ومستعدون لصيد تلك السمكة الكبيرة بطول ستة أو. سبعة<br>أقدام",
    "proof_sentence": "إنني متشوق لصيد السمك. ومستعد لصيد تلك السمكة الكبيرة بطول مترين تقريباً",
    "api_response": {
      "SemanticAccuracy": 2,
      "Fluency": 3,
      "GrammaticalCorrectness": 4,
      "Punctuation": 3,
      "TerminologyConsistency": 2,
      "StyleTone": 3,
      "IdiomAndSlangHandling": 2,
      "ComplexityFlag": "2",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 1,
        "TermMisuseErrors": 1,
        "IdiomMistranslationErrors": 1,
        "Severity": "Major"
      },
      "OverallQuality": 2,
      "PostEditingEffort": 3,
      "Reflection": "The translation has significant semantic inaccuracies and terminology<br>inconsistencies, requiring substantial post-editing effort.",
      "Error": null
    }
  },
  {
    "machine_sentence": "لكن، مثل، هل ستتمكن من إخراج الخطاف من فمها بأمان دون. مثل، فقدان<br>إصبع؟",
    "proof_sentence": "لكن، مثل ستتمكن من إخراج الخطاف من فمها بأمان دون فقدان إصبع؟",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 4,
      "GrammaticalCorrectness": 5,
      "Punctuation": 5,
      "TerminologyConsistency": 5,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": 2,
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "OmissionAdditionErrors": 1,
        "IdiomMistranslationErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 4,
      "Reflection": "The repetition of 'مثل' slightly affects fluency and style, but overall meaning<br>is preserved.",
      "Error": null
    }
  },
  {
    "machine_sentence": "(بينساكولا). السبب الذي يجعلني أحب الصيد هناك هو. أعتقد، لأنك تعلم، لا يوجد<br>الكثير من الناس. كما تعلم، يسبحون على طول الشواطئ",
    "proof_sentence": "(بينساكولا)، السبب الذي يجعلني أحب الصيد هناك هو.... أعتقد لأنه لا يوجد الكثير<br>من الناس يسبحون على طول الشواطئ",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 4,
      "GrammaticalCorrectness": 5,
      "Punctuation": 4,
      "TerminologyConsistency": 5,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "2",
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "PunctuationErrors": 2,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 4,
      "Reflection": "Minor punctuation and style issues slightly reduce the overall score. No major<br>adjustments needed.",
      "Error": null
    }
  },
  {
    "machine_sentence": "عندما لا يكون هناك أحد في المكان",
    "proof_sentence": "عندما لا يكون هناك أحد في المكان",
    "api_response": {
      "SemanticAccuracy": 5,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 5,
      "TerminologyConsistency": 5,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "Severity": "None"
      },
      "OverallQuality": 5,
      "PostEditingEffort": 5,
      "Reflection": "",
      "Error": null
    }
  },
  {
    "machine_sentence": "سأحاول",
    "proof_sentence": "- سأحاول - حقاً؟",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 4,
      "TerminologyConsistency": 5,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "OmissionAdditionErrors": 1,
        "PunctuationErrors": 1,
        "IdiomMistranslationErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 3,
      "Reflection": "The omission of 'حقاً؟' slightly affects semantic accuracy and style, but the<br>core meaning remains intact.",
      "Error": null
    }
  },
  {
    "machine_sentence": "سأصطاد هناك، لأنه من المحتمل أن تكون هناك أسماك. لذا بما أننا نقترب<br>أكثر فأكثر من وقت متأخر في. هنا، هل أنت أكثر توتراً أم حماساً<br>أم. أي شيء غير ذلك؟",
    "proof_sentence": "سأصطاد هناك لأنه من المحتمل أن توجد الأسماك. بما أننا نقترب أكثر فأكثر<br>من ولادة (لايتون) الصغيرة. هل أنت أكثر توتراً أم حماسة أم أي شيء<br>غير ذلك؟",
    "api_response": {
      "SemanticAccuracy": 3,
      "Fluency": 4,
      "GrammaticalCorrectness": 4,
      "Punctuation": 4,
      "TerminologyConsistency": 3,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "2",
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 1,
        "MeaningLossErrors": 1,
        "TermMisuseErrors": 1,
        "OmissionErrors": 1,
        "Severity": "Major"
      },
      "OverallQuality": 3,
      "PostEditingEffort": 3,
      "Reflection": "The omission of specific details and awkward phrasing required adjustments in<br>semantic accuracy and fluency scores.",
      "Error": null
    }
  },
  {
    "machine_sentence": "لست مستعداً لقدومها الآن. نعم. كما تعلم، فقط مرة واحدة لأبطئ قليلاً. مثل",
    "proof_sentence": "- لست مستعدة لقدومها الآن - نعم، كما تعلمين. - أريد الوقت أن<br>يبطئ قليلاً - أجل",
    "api_response": {
      "SemanticAccuracy": 3,
      "Fluency": 2,
      "GrammaticalCorrectness": 3,
      "Punctuation": 2,
      "TerminologyConsistency": 4,
      "StyleTone": 3,
      "IdiomAndSlangHandling": null,
      "ComplexityFlag": 2,
      "CueTimingDiscrepancies": "Yes",
      "ErrorCategorization": {
        "GrammarErrors": 1,
        "MeaningLossErrors": 1,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 3,
      "PostEditingEffort": 3,
      "Reflection": "The analysis highlights issues with fluency and punctuation, which affect the<br>overall quality. Adjustments were made to reflect the impact of these errors.",
      "Error": null
    }
  },
  {
    "machine_sentence": "للذهاب إلى (فلوريدا) لقضاء إجازة أخيرة. كنت متحمسة حقاً. سعيدة حقاً",
    "proof_sentence": "للذهاب إلى (فلوريدا) لقضاء إجازة أخيرة. كنت متحمسة حقاً وسعيدة حقاً",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 4,
      "GrammaticalCorrectness": 5,
      "Punctuation": 5,
      "TerminologyConsistency": 5,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "OmissionAdditionErrors": 1,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 4,
      "Reflection": "The omission of 'و' slightly affects fluency and style, but overall meaning<br>is preserved.",
      "Error": null
    }
  },
  {
    "machine_sentence": "لذا هناك الكثير من الأسماك التي تبقى في الداخل",
    "proof_sentence": "لذا هناك الكثير من الأسماك التي تبقى قريبة",
    "api_response": {
      "SemanticAccuracy": 3,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 5,
      "TerminologyConsistency": 4,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": 1,
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 1,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "Severity": "Major"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 3,
      "Reflection": "The main issue is the change in spatial context, which affects semantic<br>accuracy. No other adjustments needed.",
      "Error": null
    }
  },
  {
    "machine_sentence": "أعلم أنه ليس هناك الكثير للقيام به. لكن، كما تعلم، يبدو أن هناك<br>الكثير للقيام به",
    "proof_sentence": "أعلم أن ليس هناك الكثير للقيام به. لكن يبدو أن هناك الكثير للقيام<br>به",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 5,
      "TerminologyConsistency": 5,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "OmissionAdditionErrors": 1,
        "Severity": "Minor"
      },
      "OverallQuality": 5,
      "PostEditingEffort": 5,
      "Reflection": "",
      "Error": null
    }
  },
  {
    "machine_sentence": "من أريد أن يتخذ القرارات؟",
    "proof_sentence": "من أريد أن يتخذ القرارات؟",
    "api_response": {
      "SemanticAccuracy": 5,
      "Fluency": 5,
      "GrammaticalCorrectness": 5,
      "Punctuation": 5,
      "TerminologyConsistency": 5,
      "StyleTone": 5,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": "1",
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 0,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "Severity": "None"
      },
      "OverallQuality": 5,
      "PostEditingEffort": 5,
      "Reflection": "",
      "Error": null
    }
  },
  {
    "machine_sentence": "لذا الآن هذا دائماً موضوع مخيف للحديث عنه. بشأنه. لكن، أعني، سيتم سؤالنا<br>عنه في المستشفى إذا. لسبب ما، لم أتمكن من اتخاذ قرار",
    "proof_sentence": "بات الآن هذا دائماً موضوعاً مخيفاً للحديث بشأنه. لكن سيتم سؤالنا عنه في<br>المستشفى. إذا لسبب ما لم أتمكن من اتخاذ قرار",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 4,
      "GrammaticalCorrectness": 5,
      "Punctuation": 4,
      "TerminologyConsistency": 5,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": 2,
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 1,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 3,
      "Reflection": "The translation is mostly accurate with minor semantic and fluency issues. No<br>major adjustments needed.",
      "Error": null
    }
  },
  {
    "machine_sentence": "مثل. أنا فاقد الوعي أو موصول بالأنابيب. أنا ميت دماغياً أو أي شيء<br>آخر",
    "proof_sentence": "ربما أفقد الوعي أو أوصل بالأنابيب. قد أموت دماغياً أو أي شيء آخر",
    "api_response": {
      "SemanticAccuracy": 4,
      "Fluency": 4,
      "GrammaticalCorrectness": 5,
      "Punctuation": 5,
      "TerminologyConsistency": 5,
      "StyleTone": 4,
      "IdiomAndSlangHandling": 5,
      "ComplexityFlag": 2,
      "CueTimingDiscrepancies": "No",
      "ErrorCategorization": {
        "GrammarErrors": 0,
        "MeaningLossErrors": 1,
        "TermMisuseErrors": 0,
        "IdiomMistranslationErrors": 0,
        "Severity": "Minor"
      },
      "OverallQuality": 4,
      "PostEditingEffort": 3,
      "Reflection": "The use of 'مثل' at the beginning slightly affects fluency and style,<br>but overall, the translation is accurate and requires moderate post-editing<br>effort.",
      "Error": null
    }
  }
];