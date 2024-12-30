

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const leadParticipantText = document.getElementById("lead-name");

  let isHidden = true; // 상태를 저장

  toggleButton.addEventListener("click", () => {
    if (isHidden) {
      // hide.png → open.png로 변경
      toggleButton.src = "open.png";
      // 대표 예약자 이름을 복구
      leadParticipantText.textContent = "KANG AREUM"; // 예시 이름
    } else {
      // open.png → hide.png로 변경
      toggleButton.src = "hide.png";
      // 대표 예약자 이름을 *****로 가림
      leadParticipantText.textContent = "KANG *****";
    }

    // 상태 토글
    isHidden = !isHidden;
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");
  let activeQR = null; // 현재 열려 있는 QR 코드
  let activeButton = null; // 현재 열려 있는 버튼

  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const qrCode = button.nextElementSibling; // 클릭한 버튼 다음에 있는 .qr-code div를 찾음
      const qrToggle = button.closest(".qr-toggle"); // 해당 토글의 부모 div (qr-toggle)

      // 이미 열려있는 QR 코드가 있을 경우 닫음
      if (activeQR && activeQR !== qrCode) {
        activeQR.style.maxHeight = "0"; // 기존의 QR 코드 닫기
        activeQR.style.opacity = "0"; // 기존의 QR 코드 닫을 때 부드럽게 사라짐
        activeQR.style.display = "none"; // 기존 QR 코드 숨기기
        activeQR.closest(".qr-toggle").classList.remove("open"); // 기존의 토글 버튼 클래스 제거
        // 기존의 열려 있는 버튼을 다시 보이게 설정
        activeButton.style.display = "block";
      }

      // QR 코드 열기/닫기
      if (qrCode.style.display === "none" || qrCode.style.display === "") {
        qrCode.style.display = "block"; // QR 코드 보이게 설정
        qrCode.style.maxHeight = qrCode.scrollHeight + "px"; // QR 코드 높이를 콘텐츠에 맞게 확장
        qrCode.style.opacity = "1"; // QR 코드가 부드럽게 나타남
        qrToggle.classList.add("open"); // 토글 버튼에 열린 상태 클래스 추가
        activeQR = qrCode; // 현재 열려있는 QR 코드로 설정
        // 버튼을 숨김
        button.style.display = "none";
        activeButton = button; // 현재 열려있는 버튼으로 설정
      } else {
        qrCode.style.maxHeight = "0"; // QR 코드 닫을 때 높이를 0으로 설정하여 숨김
        qrCode.style.opacity = "0"; // QR 코드가 부드럽게 사라짐
        qrCode.style.display = "none"; // QR 코드 숨기기
        qrToggle.classList.remove("open"); // 열린 상태 클래스를 제거
        activeQR = null; // QR 코드 닫기
        // 버튼을 다시 보이게 설정
        button.style.display = "block";
        activeButton = null; // 버튼을 닫음
      }
    });
  });
});


function copyVoucher(voucherNumber) {
  // 클립보드에 복사할 텍스트를 선택
  navigator.clipboard.writeText(voucherNumber).then(function() {
    // 복사가 완료되면 사용자에게 알림을 표시 (옵션)
    alert('바우처 번호가 클립보드에 복사되었습니다!');
  }).catch(function(err) {
    // 오류 발생 시 알림
    console.error('복사 실패:', err);
    alert('복사 실패! 다시 시도해 주세요.');
  });
}