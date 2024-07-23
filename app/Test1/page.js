'use client'

import React, { useState } from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import Popup from 'reactjs-popup';

import "./style.css"

const PersonalityTest = () => {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const questions = [
    { id: 'I', text: 'هل تميل إلى نشاط يتطلب التفكير والتحليل والبرهنة؟' },
    { id: 'R', text: 'هل تميل إلى ممارسة نشاط يدوي مثلا: إصلاح الأجهزة المعطّبة؟' },
    { id: 'E', text: 'هل تميل إلى ممارسة أنشطة تتحمل فيها مسؤوليات مثلا: تنظيم رحلات؟' },
    { id: 'A', text: 'هل تميل إلى ممارسة نشاط فني مثلا: رسم، موسيقى، تمثيل؟' },
    { id: 'E', text: 'هل تميل إلى ممارسة نشاط تجاري؟' },
    { id: 'I', text: 'هل تسعى إلى تطوير معارفك وتنميتها باستمرار؟' },
    { id: 'R', text: 'هل تميل إلى ممارسة أنشطة تتطلب مجهودًا بدنيًا مثلا: رياضة، عمل شاق؟' },
    { id: 'C', text: 'هل تميل إلى ممارسة المهن المكتبية مثلا: سكرتير، مستكتب؟' },
    { id: 'A', text: 'هل تميل إلى ممارسة مهنة تتطلب ابتكارًا فنيًا؟' },
    { id: 'S', text: 'هل تميل إلى نشاط يتضمن الاهتمام بمشاكل الآخرين ومحاولة حلها؟' },
    { id: 'C', text: 'هل تفضل إنجاز عمل محدد لا يتطلب منك اجتهادًا خاصًا أو إبداعًا؟' },
    { id: 'S', text: 'هل تميل إلى مهنة تسمح لك بتقديم خدمات إنسانية للآخرين؟' },
    { id: 'R', text: 'هل ترغب في أن تكون مثل مخترع كبير للآلات؟' },
    { id: 'E', text: 'هل ترغب في أن تكون مثل رجل أعمال أو امرأة أعمال؟' },
    { id: 'I', text: 'هل ترغب في أن تكون مثل باحث في مجال علمي أو أدبي؟' },
    { id: 'A', text: 'هل ترغب في أن تكون مثل شخص معروف بنشاطه الفني؟' },
    { id: 'S', text: 'هل ترغب في أن تكون مثل شخصية معروفة بحبها لمساعدة الآخرين؟' },
    { id: 'C', text: 'هل ترغب في أن تكون مثل شخص يعمل في مكتب؟' },
    { id: 'S', text: 'هل تعتقد أن لديك المؤهلات الكافية للقيام بعمل يتضمن مساعدة أو إرشاد الآخرين؟' },
    { id: 'R', text: 'هل تعتقد أن لديك المؤهلات الكافية للقيام بعمل يتطلب مهارة يدوية؟' },
    { id: 'E', text: 'هل تعتقد أن لديك المؤهلات الكافية للقيام بعمل جماعي تكون فيه أنت القائد؟' },
    { id: 'I', text: 'هل تعتقد أن لديك المؤهلات الكافية للقيام بعمل يتطلب استخدام معارف متقدمة؟' },
    { id: 'C', text: 'هل تعتقد أن لديك المؤهلات الكافية للقيام بعمل يتطلب القدرة على التنظيم والعناية؟' },
    { id: 'A', text: 'هل تعتقد أن لديك المؤهلات الكافية للقيام بعمل فني؟' },
    { id: 'I', text: 'هل تميل في دراستك إلى تحصيل المعرفة وتحقيق التفوق؟' },
    { id: 'R', text: 'هل تميل إلى رسم الخرائط وتلوينها بدقة أثناء دراسة الجغرافيا؟' },
    { id: 'A', text: 'هل تميل في دراستك إلى حصص التربية الفنية أو الموسيقية؟' },
    { id: 'C', text: 'عندما تحتاج إلى أحد كتبك الدراسية، هل تجده في مكانه دون عناء؟' },
    { id: 'E', text: 'هل تميل إلى تحمل المسؤولية للقيادة أو المبادرة داخل الفصل؟' },
    { id: 'S', text: 'هل تميل في دراستك إلى العمل الجماعي انطلاقا من رغبتك في خدمة من حولك؟' },
  ];
  const descriptions = {
    R: 'شخصية واقعية: تفضل الأنشطة العملية واليدوية',
    I: 'شخصية فكرية: تهتم بالتفكير والتحليل',
    E: 'شخصية قيادية: تميل إلى تنظيم وتحمل المسؤولية',
    A: 'شخصية فنية: تهتم بالإبداع والأنشطة الفنية',
    S: 'شخصية اجتماعية: تحب مساعدة الآخرين والعمل الجماعي',
    C: 'شخصية تقليدية: تفضل التنظيم والمهام المكتبية',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define scores object
    const scores = {
      R: 0, // Réaliste
      I: 0, // Intellectuel
      E: 0, // Entreprenant
      A: 0, // Artiste
      S: 0, // Social
      C: 0, // Conventionnel
    };

    // Calculate scores based on answers
    questions.forEach((question) => {
      const response = answers[question.id];
      switch (response) {
        case '1':
          scores[question.id] += 1; // "لا"
          break;
        case '2':
          scores[question.id] += 2; // "قليلا"
          break;
        case '3':
          scores[question.id] += 3; // "أحيانا"
          break;
        case '4':
          scores[question.id] += 4; // "نعم"
          break;
        case '5':
          scores[question.id] += 5; // "كثيرا"
          break;
        default:
          break;
      }
    });

    // Determine top three personality types
    const sortedTypes = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    const topThreeTypes = sortedTypes.slice(0, 3);

    // Update state with results
    setResults(topThreeTypes);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAnswers({ ...answers, [id]: value });
  };
  

  
  
   return (
    <Container className="containerk py-4">
      <h2 className="title mb-4">استبيان الشخصية</h2>
      <Form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <FormGroup key={question.id} className="form-group">
            <Label for={question.id}>{question.text}</Label>
            <Input
              type="select"
              name={question.id}
              id={question.id}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">اختر الإجابة</option>
              <option value="1">لا</option>
              <option value="2">قليلا</option>
              <option value="3">أحيانا</option>
              <option value="4">نعم</option>
              <option value="5">كثيرا</option>
            </Input>
          </FormGroup>
        ))}
        <Button type="submit" color="primary" className="btn-submit">احسب النتيجة</Button>
      </Form>
      
      {results && (
        <Popup open={true} onClose={() => setResults(null)} modal>
          
            <h3 className="result-title">: النتيجة</h3>
            <ul className="result-list">
              {results.map((type, index) => (
                <li key={index} className="result-item">
                   {descriptions[type]} : {type}
                </li>
              ))}
            </ul>
            <Button color="secondary" onClick={() => setResults(null)}>إغلاق</Button>
          
        </Popup>
      )}
    </Container>
  );
};

export default PersonalityTest;