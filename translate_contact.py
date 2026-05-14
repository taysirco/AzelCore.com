import re

with open('src/app/[locale]/contact/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
"""const contactSchema = {""",
"""const getContactSchema = (isAr: boolean) => ({""")

content = content.replace(
"""      name: 'تواصل معنا — عزل كور',
      url: `${SITE_URL}/contact`,
      mainEntity: {""",
"""      name: isAr ? 'تواصل معنا — عزل كور' : 'Contact Us — AzelCore',
      url: `${SITE_URL}/contact`,
      mainEntity: {""")

content = content.replace(
"""        name: 'عزل كور',""",
"""        name: isAr ? 'عزل كور' : 'AzelCore',""")

content = content.replace(
"""            name: 'حجز استشارة مجانية',""",
"""            name: isAr ? 'حجز استشارة مجانية' : 'Book a free consultation',""")

content = content.replace(
"""        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'تواصل معنا', item: `${SITE_URL}/contact` },""",
"""        { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: isAr ? 'تواصل معنا' : 'Contact Us', item: `${SITE_URL}/contact` },""")

content = content.replace(
"""      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'هل أحتاج حجز موعد مسبق؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم، ننصح بالحجز قبل 24 ساعة لضمان توفر الفني. في الحالات العاجلة ممكن نخدمك نفس اليوم حسب الجدول.' } },
        { '@type': 'Question', name: 'هل الخدمة المتنقلة متاحة في حيّي؟', acceptedAnswer: { '@type': 'Answer', text: 'نغطي كل أحياء جدة بدون استثناء. الفني يصل بسيارة مجهزة بكل الأدوات.' } },
        { '@type': 'Question', name: 'كم مدة التظليل الكامل للسيارة؟', acceptedAnswer: { '@type': 'Answer', text: 'تظليل سيارة سيدان كامل: 2-3 ساعات. SUV: 3-4 ساعات. تسلّم سيارتك جاهزة نفس اليوم.' } },
        { '@type': 'Question', name: 'هل تقبلون الدفع بالتقسيط؟', acceptedAnswer: { '@type': 'Answer', text: 'نقبل: كاش، مدى، فيزا، Apple Pay، STC Pay. للمشاريع الكبيرة: خطط دفع مرنة.' } },
      ],""",
"""      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: isAr ? 'هل أحتاج حجز موعد مسبق؟' : 'Do I need to book in advance?', acceptedAnswer: { '@type': 'Answer', text: isAr ? 'نعم، ننصح بالحجز قبل 24 ساعة لضمان توفر الفني. في الحالات العاجلة ممكن نخدمك نفس اليوم حسب الجدول.' : 'Yes, we recommend booking 24 hours in advance. For urgent cases, same-day service may be available depending on schedule.' } },
        { '@type': 'Question', name: isAr ? 'هل الخدمة المتنقلة متاحة في حيّي؟' : 'Is mobile service available in my neighborhood?', acceptedAnswer: { '@type': 'Answer', text: isAr ? 'نغطي كل أحياء جدة بدون استثناء. الفني يصل بسيارة مجهزة بكل الأدوات.' : 'We cover all Jeddah neighborhoods without exception. The technician arrives with a fully equipped vehicle.' } },
        { '@type': 'Question', name: isAr ? 'كم مدة التظليل الكامل للسيارة؟' : 'How long does full car tinting take?', acceptedAnswer: { '@type': 'Answer', text: isAr ? 'تظليل سيارة سيدان كامل: 2-3 ساعات. SUV: 3-4 ساعات. تسلّم سيارتك جاهزة نفس اليوم.' : 'Full sedan tinting: 2-3 hours. SUV: 3-4 hours. Your car will be ready the same day.' } },
        { '@type': 'Question', name: isAr ? 'هل تقبلون الدفع بالتقسيط؟' : 'Do you accept installment payments?', acceptedAnswer: { '@type': 'Answer', text: isAr ? 'نقبل: كاش، مدى، فيزا، Apple Pay، STC Pay. للمشاريع الكبيرة: خطط دفع مرنة.' : 'We accept Cash, Mada, Visa, Apple Pay, and STC Pay. For large projects: flexible payment plans.' } },
      ],""")

content = content.replace(
"""  ],
};""",
"""  ],
});""")

content = content.replace(
"""      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />""",
"""      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getContactSchema(isAr)) }} />""")

content = content.replace(
"""              <div className={styles.contactCard}>
                <span className={styles.cardIcon}>🕐</span>
                <h2 className={styles.cardTitle}>{isAr ? 'ساعات العمل' : 'Working Hours'}</h2>
                <p className={styles.cardDesc}>{WORKING_HOURS}</p>
                <span className={styles.cardMeta}>{isAr ? 'الجمعة: إجازة' : 'Friday: Closed'}</span>
              </div>""",
"""              <div className={styles.contactCard}>
                <span className={styles.cardIcon}>🕐</span>
                <h2 className={styles.cardTitle}>{isAr ? 'ساعات العمل' : 'Working Hours'}</h2>
                <p className={styles.cardDesc}>{isAr ? WORKING_HOURS : 'Sa-Th 08:00 AM - 10:00 PM'}</p>
                <span className={styles.cardMeta}>{isAr ? 'الجمعة: إجازة' : 'Friday: Closed'}</span>
              </div>""")

content = content.replace(
"""              <div className={styles.expertBox}>
                <h3 className={styles.expertTitle}>👨‍🔧 {OWNER_NAME}</h3>
                <p className={styles.expertRole}>{OWNER_TITLE}</p>
                <p className={styles.expertQuote}>
                  &ldquo;نقدم استشارة مجانية لكل عميل — نساعدك تختار أفضل نوع فيلم يناسب سيارتك أو مبناك بناءً على احتياجك الحقيقي، مش اللي يحقق أعلى ربح.&rdquo;
                </p>
              </div>""",
"""              <div className={styles.expertBox}>
                <h3 className={styles.expertTitle}>👨‍🔧 {isAr ? OWNER_NAME : 'Ahmed Salem'}</h3>
                <p className={styles.expertRole}>{isAr ? OWNER_TITLE : 'Technical Director'}</p>
                <p className={styles.expertQuote}>
                  {isAr ? '“نقدم استشارة مجانية لكل عميل — نساعدك تختار أفضل نوع فيلم يناسب سيارتك أو مبناك بناءً على احتياجك الحقيقي، مش اللي يحقق أعلى ربح.”' : '“We offer a free consultation for every client — we help you choose the best film type for your car or building based on your real needs, not what yields the highest profit.”'}
                </p>
              </div>""")

content = content.replace(
"""              <div className={styles.trustBox}>
                <h3 className={styles.trustTitle}>بيانات النشاط</h3>
                <div className={styles.trustGrid}>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>الحالة</span><span className={styles.trustValue}>منشأة مسجلة ✅</span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>السجل التجاري</span><span className={styles.trustValue}><CopyButton valueToCopy={CRN} label={CRN} /></span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>الضريبة</span><span className={styles.trustValue}><CopyButton valueToCopy={VAT_ID} label="مسجل في ZATCA" /></span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>الوكالة</span><span className={styles.trustValue}>Johnson & 3M Window Films</span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>المدينة</span><span className={styles.trustValue}>جدة</span></div>
                </div>
              </div>""",
"""              <div className={styles.trustBox}>
                <h3 className={styles.trustTitle}>{isAr ? 'بيانات النشاط' : 'Business Details'}</h3>
                <div className={styles.trustGrid}>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>{isAr ? 'الحالة' : 'Status'}</span><span className={styles.trustValue}>{isAr ? 'منشأة مسجلة ✅' : 'Registered Business ✅'}</span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>{isAr ? 'السجل التجاري' : 'CR Number'}</span><span className={styles.trustValue}><CopyButton valueToCopy={CRN} label={CRN} /></span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>{isAr ? 'الضريبة' : 'Tax ID'}</span><span className={styles.trustValue}><CopyButton valueToCopy={VAT_ID} label={isAr ? 'مسجل في ZATCA' : 'ZATCA Registered'} /></span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>{isAr ? 'الوكالة' : 'Dealership'}</span><span className={styles.trustValue}>Johnson & 3M Window Films</span></div>
                  <div className={styles.trustItem}><span className={styles.trustLabel}>{isAr ? 'المدينة' : 'City'}</span><span className={styles.trustValue}>{isAr ? 'جدة' : 'Jeddah'}</span></div>
                </div>
              </div>""")

content = content.replace(
"""                  title="موقع عزل كور جدة"
                />
              </div>
            </div>
          </div>
        </div>
      </section>""",
"""                  title={isAr ? "موقع عزل كور جدة" : "AzelCore Jeddah Location"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>""")

content = content.replace(
"""          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>📍 نطاق الخدمة</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', textAlign: 'right' }}>
            <div style={{ background: 'var(--surface)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--border)' }}>
              <p style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>🚗 تظليل سيارات</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>جميع أحياء جدة + خدمة متنقلة. نوصل لموقعك خلال 30-60 دقيقة.</p>
            </div>
            <div style={{ background: 'var(--surface)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--border)' }}>
              <p style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>🏢 عزل مباني</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>15 مدينة سعودية. فريق متخصص للمشاريع الكبيرة (500م²+).</p>
            </div>
            <div style={{ background: 'var(--surface)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--border)' }}>
              <p style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>⏱️ وقت الاستجابة</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>رد واتساب: أقل من 5 دقائق. عرض سعر: خلال ساعة.</p>
            </div>
          </div>""",
"""          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>📍 {isAr ? 'نطاق الخدمة' : 'Service Coverage'}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', textAlign: isAr ? 'right' : 'left' }}>
            <div style={{ background: 'var(--surface)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--border)' }}>
              <p style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>🚗 {isAr ? 'تظليل سيارات' : 'Car Tinting'}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>{isAr ? 'جميع أحياء جدة + خدمة متنقلة. نوصل لموقعك خلال 30-60 دقيقة.' : 'All Jeddah neighborhoods + Mobile Service. We reach your location within 30-60 mins.'}</p>
            </div>
            <div style={{ background: 'var(--surface)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--border)' }}>
              <p style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>🏢 {isAr ? 'عزل مباني' : 'Building Insulation'}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>{isAr ? '15 مدينة سعودية. فريق متخصص للمشاريع الكبيرة (500م²+).' : '15 Saudi cities. Specialized team for large projects (500m²+).'}</p>
            </div>
            <div style={{ background: 'var(--surface)', borderRadius: '12px', padding: '1rem', border: '1px solid var(--border)' }}>
              <p style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>⏱️ {isAr ? 'وقت الاستجابة' : 'Response Time'}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>{isAr ? 'رد واتساب: أقل من 5 دقائق. عرض سعر: خلال ساعة.' : 'WhatsApp reply: under 5 mins. Quote: within an hour.'}</p>
            </div>
          </div>""")

content = content.replace(
"""          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem', textAlign: 'center' }}>أسئلة شائعة عن الحجز والتواصل</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'هل أحتاج حجز موعد مسبق؟', a: 'نعم، ننصح بالحجز قبل 24 ساعة لضمان توفر الفني. في الحالات العاجلة ممكن نخدمك نفس اليوم حسب الجدول.' },
              { q: 'هل الخدمة المتنقلة متاحة في حيّي؟', a: 'نغطي كل أحياء جدة بدون استثناء. الفني يصل بسيارة مجهزة بكل الأدوات. التركيب في جراجك أو موقف مظلل.' },
              { q: 'كم مدة التظليل الكامل للسيارة؟', a: 'تظليل سيارة سيدان كامل: 2-3 ساعات. SUV: 3-4 ساعات. تسلّم سيارتك جاهزة نفس اليوم.' },
              { q: 'هل تقبلون الدفع بالتقسيط؟', a: 'نقبل: كاش، مدى، فيزا، Apple Pay، STC Pay. للمشاريع الكبيرة (مباني): خطط دفع مرنة.' },
            ].map((faq, i) => (""",
"""          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem', textAlign: 'center' }}>{isAr ? 'أسئلة شائعة عن الحجز والتواصل' : 'Booking & Contact FAQ'}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { 
                q: isAr ? 'هل أحتاج حجز موعد مسبق؟' : 'Do I need an appointment?', 
                a: isAr ? 'نعم، ننصح بالحجز قبل 24 ساعة لضمان توفر الفني. في الحالات العاجلة ممكن نخدمك نفس اليوم حسب الجدول.' : 'Yes, we recommend booking 24 hours in advance. Urgent same-day service may be available.' 
              },
              { 
                q: isAr ? 'هل الخدمة المتنقلة متاحة في حيّي؟' : 'Is mobile service available in my area?', 
                a: isAr ? 'نغطي كل أحياء جدة بدون استثناء. الفني يصل بسيارة مجهزة بكل الأدوات. التركيب في جراجك أو موقف مظلل.' : 'We cover all Jeddah neighborhoods. The technician arrives with full equipment. Installation in your garage or shaded parking.' 
              },
              { 
                q: isAr ? 'كم مدة التظليل الكامل للسيارة؟' : 'How long does car tinting take?', 
                a: isAr ? 'تظليل سيارة سيدان كامل: 2-3 ساعات. SUV: 3-4 ساعات. تسلّم سيارتك جاهزة نفس اليوم.' : 'Full sedan tinting: 2-3 hours. SUV: 3-4 hours. Car is ready the same day.' 
              },
              { 
                q: isAr ? 'هل تقبلون الدفع بالتقسيط؟' : 'Do you accept installments?', 
                a: isAr ? 'نقبل: كاش، مدى، فيزا، Apple Pay، STC Pay. للمشاريع الكبيرة (مباني): خطط دفع مرنة.' : 'We accept Cash, Mada, Visa, Apple Pay, STC Pay. Large projects have flexible plans.' 
              },
            ].map((faq, i) => (""")

with open('src/app/[locale]/contact/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
