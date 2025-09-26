/* 진행바 */
const prog3 = document.getElementById('prog3');
function setProgressStep(step) { prog3.querySelectorAll('.seg').forEach((s, i) => s.classList.toggle('fill', i < step)); }

/* 약관 템플릿 → 데이터 */
function getTplText(id) {
    const el = document.getElementById(id);
    if (!el) return { title: "", body: "" };
    const src = el.content ? el.content : el;
    const title = el.dataset.title || "";
    const body = (src.textContent || "").trim();
    return { title, body };
}
const TERM_KEYS = ["t1", "t2", "t3", "t4", "t5"];
const TERMS = Object.fromEntries(TERM_KEYS.map(k => {
    const { title, body } = getTplText(`terms-${k}`);
    return [k, { title, body }];
}));

const list = Array.from(document.querySelectorAll('.term-row'));
const requiredIds = ['t1', 't2', 't3'];
const agreeAll = document.getElementById('agreeAll');
const btnNext = document.getElementById('btnNext');

function isChecked(r) { return r.classList.contains('checked'); }
function setChecked(r, v) { r.classList.toggle('checked', !!v); syncAll(); }
function syncAll() {
    agreeAll.classList.toggle('checked', list.every(r => r.classList.contains('checked')));
    btnNext.disabled = !requiredIds.every(id => document.querySelector(`.term-row[data-id="${id}"]`).classList.contains('checked'));
}
list.forEach(r => {
    const chev = r.querySelector('.chev');
    r.addEventListener('click', e => { if (e.target === chev) return; setChecked(r, !isChecked(r)); });
    chev.addEventListener('click', e => {
        e.stopPropagation();
        openDetail(r.dataset.id);
    });
});
agreeAll.addEventListener('click', () => {
    const to = !agreeAll.classList.contains('checked');
    list.forEach(r => r.classList.toggle('checked', to));
    syncAll();
});

/* 상세 패널 */
const grid = document.getElementById('grid'),
    detailBox = document.getElementById('detailBox'),
    detailTitle = document.getElementById('detailTitle'),
    detailBody = document.getElementById('detailBody');
document.getElementById('detailClose').addEventListener('click', closeDetail);
let currentDetailId = null;

function openDetail(id) {
    if (currentDetailId === id && grid.classList.contains('has-detail')) { closeDetail(); return; }
    const t = TERMS[id]; if (!t) return;
    detailTitle.textContent = t.title;
    detailBody.textContent = t.body;
    grid.classList.add('has-detail');
    detailBox.scrollTop = 0;
    document.querySelectorAll('.term-row.active').forEach(el => el.classList.remove('active'));
    document.querySelector(`.term-row[data-id="${id}"]`)?.classList.add('active');
    currentDetailId = id;
}
function closeDetail() {
    grid.classList.remove('has-detail');
    detailTitle.textContent = '약관 상세';
    detailBody.textContent = '오른쪽 ‘›’ 버튼을 눌러 약관을 확인하세요.';
    currentDetailId = null;
    document.querySelectorAll('.term-row.active').forEach(el => el.classList.remove('active'));
}

/* Step1 → Step2 */
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
btnNext.addEventListener('click', () => {
    setProgressStep(2);
    step1.style.display = 'none';
    step2.style.display = 'block';
    step2.setAttribute('aria-hidden', 'false');
});

/* 초기 */
setProgressStep(1); syncAll(); closeDetail();

/* ===== Step2 검증 + 이메일 도메인 전환 ===== */
const uid = document.getElementById('uid'),
    pw = document.getElementById('pw'),
    pw2 = document.getElementById('pw2'),
    emailLocal = document.getElementById('emailLocal'),
    emailDomainSel = document.getElementById('emailDomainSel'),
    emailDomainCustom = document.getElementById('emailDomainCustom'),
    domainWrap = document.getElementById('domainWrap'),
    domainToggle = document.getElementById('domainToggle'),
    phone = document.getElementById('phone'),
    btnSubmit = document.getElementById('btnSubmit');

let idChecked = false;

// select → '직접입력' 전환
emailDomainSel.addEventListener('change', () => {
    if (emailDomainSel.value === 'custom') {
        domainWrap.classList.add('custom');
        emailDomainCustom.value = '';
        emailDomainCustom.focus();
    } else {
        domainWrap.classList.remove('custom');
    }
    validateStep2();
});

// ▾ 버튼: select 모드 복귀 + 목록 열기 시도
domainToggle.addEventListener('click', () => {
    domainWrap.classList.remove('custom');
    emailDomainSel.focus();
    try {
        emailDomainSel.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        emailDomainSel.click();
    } catch (e) { }
});

document.getElementById('btnCheckId').addEventListener('click', () => {
    const ok = /^[a-z0-9]{4,12}$/.test(uid.value);
    idChecked = ok;
    alert(ok ? '사용 가능한 아이디입니다 (데모)' : '아이디 형식이 올바르지 않습니다.');
    validateStep2();
});
document.getElementById('btnSendCode').addEventListener('click', () => {
    if (!/^[0-9\-]{9,}$/.test(phone.value)) { alert('전화번호를 확인해주세요.'); return; }
    alert('인증번호 발송 (데모)');
});

[uid, pw, pw2, emailLocal, emailDomainCustom, phone, emailDomainSel].forEach(el => el.addEventListener('input', validateStep2));

function currentDomainValue() {
    if (domainWrap.classList.contains('custom')) {
        return emailDomainCustom.value.trim();
    }
    const v = emailDomainSel.value.trim();
    return v === 'custom' ? '' : v;
}

function validateStep2() {
    const uidOk = /^[a-z0-9]{4,12}$/.test(uid.value) && idChecked;
    const pwOk = pw.value.length >= 6,
        pwMix = /(.*[A-Za-z].*[0-9]|.*[0-9].*[!@#$%^&*]|.*[A-Za-z].*[!@#$%^&*])/.test(pw.value),
        pwMatch = pw.value === pw2.value && pw.value;

    const domain = currentDomainValue();
    const emailOk = /^[^\s@]+$/.test(emailLocal.value) && /^[^\s@]+\.[^\s@]+$/.test(domain);
    const phoneOk = /^[0-9\-]{9,}$/.test(phone.value);
    btnSubmit.disabled = !(uidOk && pwOk && pwMix && pwMatch && emailOk && phoneOk);
}

/* 커튼 & 전환 */
const root = document.getElementById('auth'),
    curtain = document.getElementById('curtain'),
    curtainR = document.getElementById('curtainR'),
    goSignup = document.getElementById('goSignup'),
    btnBack = document.getElementById('btnBack'),
    complete = document.getElementById('complete'),
    signFlow = document.getElementById('signup'),
    envBtn = document.getElementById('envelopeStack');

const DURATION = 900, HALF = DURATION / 2; let halfTimer = null;
let autoPeekPending = false;

function resetRightCurtain() {
    curtainR.classList.remove('anim-to-complete');
    curtainR.style.width = '50%';
    curtainR.style.transform = 'translateX(100%)';
    curtainR.style.visibility = 'hidden';
}

goSignup.addEventListener('click', (e) => {
    e.preventDefault();
    if (halfTimer) clearTimeout(halfTimer);
    complete.style.display = 'none';
    resetRightCurtain();

    // 이전 인라인 스타일 정리
    curtain.style.removeProperty('transform');
    curtain.style.removeProperty('width');
    curtainR.style.removeProperty('width');
    curtainR.style.removeProperty('transform');
    curtainR.style.removeProperty('visibility');

    root.classList.remove('prep-login', 'prep-signup');

    signFlow.style.display = 'block';
    setProgressStep(1);
    step1.style.display = 'block';
    step2.style.display = 'none';
    closeDetail();

    curtain.classList.remove('anim-to-login');
    curtain.classList.add('anim-to-signup');
    halfTimer = setTimeout(() => { root.classList.add('prep-signup'); }, HALF);
});

btnBack.addEventListener('click', () => {
    const onStep2 = step2.style.display === 'block';
    if (onStep2) { setProgressStep(1); step2.style.display = 'none'; step1.style.display = 'block'; closeDetail(); return; }
    if (halfTimer) clearTimeout(halfTimer);
    curtain.classList.remove('anim-to-signup');
    curtain.classList.add('anim-to-login');
    halfTimer = setTimeout(() => { root.classList.add('prep-login'); }, HALF);
});

curtain.addEventListener('animationend', (e) => {
    if (e.animationName === 'wipeToSignupWide') {
        root.classList.remove('mode-login', 'pre-signup', 'prep-signup');
        root.classList.add('mode-signup');
        curtain.classList.remove('anim-to-signup');
        if (halfTimer) clearTimeout(halfTimer);
    }
    if (e.animationName === 'wipeBackToLoginWide') {
        root.classList.remove('mode-signup', 'prep-login');
        root.classList.add('mode-login');
        curtain.classList.remove('anim-to-login');
        if (halfTimer) clearTimeout(halfTimer);

        signFlow.style.removeProperty('display');
        complete.style.removeProperty('display');
        resetRightCurtain();
        if (envBtn) { envBtn.classList.remove('peek'); }
        autoPeekPending = false;

        (document.getElementById('loginId') || document.querySelector('.login-stage input'))?.focus();
    }
});

// 가입하기 → 완료 애니메이션
btnSubmit.addEventListener('click', () => {
    if (btnSubmit.disabled) return;
    setProgressStep(3);

    autoPeekPending = true;
    if (envBtn) envBtn.classList.remove('peek');

    resetRightCurtain();
    curtainR.classList.add('anim-to-complete');
    curtainR.style.visibility = 'visible';

    if (halfTimer) clearTimeout(halfTimer);
    halfTimer = setTimeout(() => {
        signFlow.style.display = 'none';
        complete.style.display = 'grid';
        complete.setAttribute('aria-hidden', 'false');
    }, HALF);
});

curtainR.addEventListener('animationend', (e) => {
    if (e.animationName === 'wipeFromRightToHalf') {
        curtainR.classList.remove('anim-to-complete');
        if (halfTimer) clearTimeout(halfTimer);
        if (autoPeekPending && envBtn) {
            envBtn.classList.add('peek');
            autoPeekPending = false;
        }
    }
});

// 완료 → 로그인 (하드 리셋)
document.getElementById('goLoginFromComplete').addEventListener('click', () => {
    if (halfTimer) clearTimeout(halfTimer);
    curtain.classList.remove('anim-to-signup', 'anim-to-login');
    curtainR.classList.remove('anim-to-complete');

    complete.style.display = 'none';
    signFlow.style.display = 'none';

    const cl = root.classList;
    cl.remove('mode-signup', 'prep-login', 'prep-signup');
    cl.add('mode-login');

    curtain.style.removeProperty('width');
    curtain.style.removeProperty('transform');
    resetRightCurtain();

    autoPeekPending = false;
    const envBtnRef = document.getElementById('envelopeStack');
    if (envBtnRef) { envBtnRef.classList.remove('peek'); }

    (document.getElementById('loginId') || document.querySelector('.login-stage input'))?.focus();
});

// 봉투 토글
if (envBtn) {
    envBtn.addEventListener('click', () => { envBtn.classList.toggle('peek'); });
    envBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); envBtn.classList.toggle('peek'); }
    });
}

// 로그인 폼 (데모 링크 이동)
const form = document.getElementById('loginForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('loginId')?.value.trim();
    const pw = document.getElementById('loginPw')?.value.trim();
    if (!id || !pw) { alert('아이디와 비밀번호를 입력해 주세요.'); return; }
    location.href = 'ysl_sub_mypage.html';
});